import { ObjectId } from "mongodb";
import { db } from "../db/connection.js";
import collections from "../db/collections.js";
import { response } from "express";

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
      try {
        let response = await db.collection(collections.LIBRARY).updateOne(
          {
            _id: new ObjectId(userId),
          },
          {
            $pull: {
              data: details,
            },
          }
        );

        if (response) {
          resolve(response);
        }
      } catch (err) {
        reject(err);
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
  getAllPlaylist: (userId, offset, limit) => {
    return new Promise(async (resolve, reject) => {
      try {
        let total = await db
          .collection(collections.LIBRARY)
          .aggregate([
            {
              $match: {
                _id: new ObjectId(userId),
              },
            },
            {
              $unwind: "$data",
            },
            {
              $group: {
                _id: 1,
                value: { $sum: 1 },
              },
            },
          ])
          .toArray();

        let response = await db
          .collection(collections.LIBRARY)
          .aggregate([
            {
              $match: {
                _id: new ObjectId(userId),
              },
            },
            {
              $unwind: "$data",
            },
            {
              $skip: offset,
            },
            {
              $limit: limit,
            },
            {
              $project: {
                _id: 1,
                id: "$data.id",
                type: "$data.type",
                name: "$data.name",
                short: "$data.short",
                images: "$data.images",
                playlistId: "$data.playlistId",
              },
            },
          ])
          .toArray();

        resolve({ data: response, total: total?.[0]?.value || 0 });
      } catch (err) {
        reject(err);
      }
    });
  },
  editPlaylist: (userId, playlistId, name) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await db.collection(collections.LIBRARY).updateOne(
          {
            _id: new ObjectId(userId),
            "data.playlistId": playlistId,
          },
          {
            $set: {
              "data.$.name": name,
            },
          }
        );

        if (response) {
          resolve(response);
        }
      } catch (err) {
        reject(err);
      }
    });
  },
};
