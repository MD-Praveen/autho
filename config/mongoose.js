// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://sriharijagan333:o8J4s6T2i23my8q1@cluster0.2xscnr7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const link = 'mongodb://127.0.0.1:27017/myapp';





const mongoose = require('mongoose');

mongoose.connect(link, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    tls: true,
    tlsAllowInvalidCertificates: true, // Use only if MongoDB uses self-signed certificates
    tlsCAFile: '/path/to/ca.pem', // Optional: Provide CA certificate if MongoDB uses custom CA
    tlsCertificateKeyFile: '/path/to/client.pem' // Optional: Provide client certificate for mutual TLS
});

const db = mongoose.connection;

db.on('error',(err) => {console.log(err)});
db.on('open',() => {console.log("DB is connected Successfully...")});

module.exports = db;
