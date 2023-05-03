import { MongoClient } from "mongodb";

let db = null;

export const ConnectDB = async (callback) => {
  let dbName = "musicon";
  let res = null;
  try {
    res = await MongoClient.connect(process.env.MONGO_URL);
  } catch (err) {
    callback(err, null);
  } finally {
    if (res) {
      db = res.db(dbName);
      callback(null, res);
    }
  }
};

export { db };
