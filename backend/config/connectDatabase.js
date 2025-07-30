const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URL).then((con) => {
        console.log(`MongoDB connected: ${process.env.DB_URL} hi ${con.connection.host}`);
    })
}

module.exports = connectDatabase;