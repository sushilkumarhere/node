
const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017';
const databaseName = 'medisuite'
const client = new MongoClient(url);

async function dbconnect() {
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('his_user');
    // Collection= db.Collection('his_user')
    // let data = await Collection.find({}).toArray();

}
module.exports = dbconnect;