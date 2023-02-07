const MongoClient = require("mongodb").MongoClient;
class NetworkModel {
  constructor() {
    this.collection = "members";
    this.mongoDns = "mongodb://localhost:27017";
    this.dbName = "stats";
    this.collection = "members";
  }

  connect() {
    return new MongoClient(this.mongoDns, {
      useNewUrlParser: true
    });
  }

  getNetworks(callback) {
    const client = this.connect();

    client.connect(err => {
      if (err) throw err;

      const db = client.db(this.dbName);

      const collection = db.collection(this.collection);
      collection.find({}).toArray((err, docs) => {
        if (err) throw err;
        callback(docs);
      });

      client.close();
    });
  }
}

const Network = new NetworkModel();
module.exports = Network;
