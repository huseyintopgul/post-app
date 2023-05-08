const mongoose = require("mongoose");

const database = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB bağlantısı başarılıdır.');
    }
    catch (error) {
        throw (error);
    }
};

module.exports = database;