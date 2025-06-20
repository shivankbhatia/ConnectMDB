const mongoose = require('mongoose');
require('dotenv').config();  // Load all env vars into process.env

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected.`);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;