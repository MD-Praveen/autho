const mongoose = require('mongoose');

const uri = "mongodb+srv://sriharijagan333:o8J4s6T2i23my8q1@cluster0.2xscnr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
});

db.once('open', () => {
    console.log('DB is connected successfully...');
});

module.exports = db;
