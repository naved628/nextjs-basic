const { MongoClient } = require("mongodb");

export async function connectingDB() {
  const client = await MongoClient.connect(
    "mongodb+srv://navz:GVIswyCWdBI59X7b@cluster0.7aw4uxk.mongodb.net/events?retryWrites=true&w=majority"
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);

  return result;
}

export async function getAllDocuments(client, collection, sort, filter) {
  const db = client.db();
  const documents = await db
    .collection(collection)
    .find(filter)
    .sort(sort)
    .toArray();

  return documents;
}
