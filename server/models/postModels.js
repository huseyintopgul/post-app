const mongoose = require('mongoose');
// database ile bağlantı kurabilmek için mongoose import etmemiz gerekiyor

const PostSchema = new mongoose.Schema(
    {
        user: {
            type: String,
            require: true,
            trim: true
        },
        title: {
            type: String,
            require: true,
            trim: true
        },
        description: {
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

module.exports = mongoose.model('post', PostSchema);
