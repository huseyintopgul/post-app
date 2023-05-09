const mongoose = require('mongoose');
// database ile bağlantı kurabilmek için mongoose import etmemiz gerekiyor

const AuthSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true,
            trim: true,
        },
        date: {
            type: Date,
            default: new Date()
        }
    }
);

// AuthSchema yı "auth" değişkenine atama yapıp da export edebiliriz
// const auth = mongoose.model('auth', AuthSchema);
// module.exports = mongoose.modul('auth', AuthSchema);

module.exports = mongoose.model('auth', AuthSchema);
