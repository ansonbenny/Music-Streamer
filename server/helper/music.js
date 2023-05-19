import { ObjectId } from "mongodb";
import { db } from "../db/connection.js";
import collections from "../db/collections.js";

export default {
  createPlaylist: (userId, details) => {
    return new Promise(async (resolve, reject) => {
      let response;
      try {
        response = await db.collection(collections.LIBRARY).insertOne({
          _id: new ObjectId(userId),
          data: [details],
        });
      } catch (err) {
        if (err?.code === 11000) {
          response = await db
            .collection(collections.LIBRARY)
            .updateOne(
              {
                _id: new ObjectId(userId),
                "data.playlistId": {
                  $ne: details.playlistId,
                },
              },
              {
                $addToSet: {
                  data: details,
                },
              }
            )
            .catch((err2) => {
              reject(err2);
            });
        } else {
          reject(err);
        }
      } finally {
        if (response) {
          resolve(response);
        }
      }
    });
  },
  deletePlaylist: (userId, details) => {
    return new Promise(async (resolve, reject) => {
      let response;

      try {
        response = await db.collection(collections.LIBRARY).updateOne(
          {
            _id: new ObjectId(userId),
          },
          {
            $pull: {
              data: details,
            },
          }
        );
      } catch (err) {
        reject(err);
      } finally {
        if (response) {
          resolve(response);
        }
      }
    });
  },
  checkInLibrary: (userId, id, type) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await db.collection(collections.LIBRARY).findOne({
          _id: new ObjectId(userId),
          "data.playlistId": `${id}_${type}`,
        });

        resolve(response);
      } catch (err) {
        reject(err);
      }
    });
  },
  getAllPlaylist: (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await db.collection(collections.LIBRARY).findOne({
          _id: new ObjectId(userId),
        });

        resolve({ data: response });
      } catch (err) {
        reject(err);
      }
    });
  },
};
