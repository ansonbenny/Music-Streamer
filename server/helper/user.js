import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { db } from "../db/connection.js";
import collections from "../db/collections.js";

export default {
  register_request: (details) => {
    return new Promise(async (resolve, reject) => {
      let response = null;
      try {
        await db
          .collection(collections.TEMP)
          .createIndex({ email: 1 }, { unique: true });
        await db
          .collection(collections.TEMP)
          .createIndex({ expireAt: 1 }, { expireAfterSeconds: 3600 });
        let check = await db.collection(collections.USER).findOne({
          email: details.email,
        });

        if (!check) {
          details.password = await bcrypt.hash(details.password, 10);

          response = await db.collection(collections.TEMP).insertOne({
            ...details,
            expireAt: new Date(),
          });
        } else {
          reject({ status: 422, message: "Already Registered" });
        }
      } catch (err) {
        if (err?.code === 11000) {
          response = await db
            .collection(collections.TEMP)
            .findOneAndUpdate(
              {
                email: details.email,
              },
              {
                $set: {
                  ...details,
                  expireAt: new Date(),
                },
              }
            )
            .catch((err_2) => {
              console.log(err_2);
              reject(err_2);
            });
        } else {
          console.log(err);
          reject(err);
        }
      } finally {
        if (response) {
          if (response?.insertedId) {
            resolve({ _id: response.insertedId.toString() });
          } else if (response?.value?._id) {
            resolve({ _id: response.value._id.toString() });
          }
        }
      }
    });
  },
};
