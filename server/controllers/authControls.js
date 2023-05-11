const AuthSchema = require('../models/authModels');
const jwt = require('jsonwebtoken');
const bcrypjs = require('bcryptjs');


// REGISTER AREA
// routes klasöründe oluşturacağımız register/login işlemleri için 
// burada controller yapısı oluşturuyoruz.
const register = async (req, res) => {
    try {
        const { userName, password, email } = req.body;
        const user = await AuthSchema.findOne({ email })
        if (user) {
            return (res.status(400).json({ msg: 'Girilen email adresi zaten kullanılıyor!' }));
        }
        // kullanılan emailin karaktaer kontrolü için alt kısımda oluşturduğumuz 
        // "isEmail()" fonksiyonundan yararlanıyoruz
        if (!isEmail(email)) {
            return (res.status(400).json({ msg: 'Girilen email adresi geçersiz karakterler içermektedir!' }));
        }
        if (password.length < 6) {
            return (res.status(400).json({ msg: 'Şifreniz en az 6 karakter içermelidir!' }));
        }
        // kontrolden geçen password ü DB ye kaydını yaparken hashliyoruz
        const hashedPassword = await bcrypjs.hash(password, 12);

        const newUser = await AuthSchema.create(
            {
                userName,
                email,
                password: hashedPassword
            })

        // güvenlik(authentication & authorization) için newUser üzerinden bir token oluşturmamız gerekiyor
        // bu token i -jwt üzerinden sign (newUser._id) edeceğiz
        const token = jwt.sign({ id: newUser._id }, 'SELECT_KEY', { expiresIn: '1h' })

        res.status(201).json({
            status: 'OK',
            newUser,
            token
        })
    }
    catch (error) {
        return res.status(400).json({ msg: error.message })
    }
};

// LOGIN AREA
const login = async (req, res) => {
    try {
        // bu kısımda req. içerisinde gelen EMAİL ile DB de kayıtlı olan şifrenin 
        // karşılaştırılmasını yapıyoruz ve res. döndürüyoruz.
        const { email, password } = req.body
        const user = await AuthSchema.findOne({ email });
        if (!user) {
            return res.status(404).json({ msg: 'Kullanıcı bulunamadı!' })
        }
        const passwordCompare = bcrypjs.compare(password, user.password)
        if (!passwordCompare) {
            return res.status(400).json({ msg: 'Girilen şifre hatalı!' })
        }
         // güvenlik(authentication & authorization) için newUser üzerinden bir token oluşturmamız gerekiyor
        // bu token ı -jwt- üzerinden sign (newUser._id) edeceğiz    
        const token = jwt.sign({ id: user._id }, 'SELECT_KEY', { expiresIn: '1h' })
        res.status(200).json({
            status: 'OK',
            user,
            token
        })
    }
    catch (error) {
        return res.status(400).json({ msg: error.message })
    }
};


function isEmail(emailAAdres) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailAAdres.match(regex)) {
        return true;
    }
    else {
        return false;
    }
}


// register/login controllırlarını diğer sayfalarda kullanabilmek için export ediyoruz.
module.exports = { register, login };