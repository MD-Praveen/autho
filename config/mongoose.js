const link = 'mongodb://127.0.0.1:27017/myapp';





const mongoose = require('mongoose');

mongoose.connect(link);
const db = mongoose.connection;

db.on('error',(err) => {console.log(err)});
db.on('open',() => {console.log("DB is connected Successfully...")});

module.exports = db;
