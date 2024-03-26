const link = 'mongodb://localhost:27017/myapp';

const uri = "mongodb+srv://sriharijagan333:o8J4s6T2i23my8q1@cluster0.2xscnr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";




const mongoose = require('mongoose');

mongoose.connect(uri);
const db = mongoose.connection;

db.on('error',(err) => {console.log(err)});
db.on('open',() => {console.log("DB is connected Successfully...")});

module.exports = db;
