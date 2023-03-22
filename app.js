const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://sarveshmohammad:wrWbhyEiSnX4698V@cluster0.ltzqj49.mongodb.net/test'
const client = new MongoClient(url);
const dbName = 'sarveshDataBase';

async function db() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName)
  const collection = db.collection('products');

  return collection;
}

module.exports= db;