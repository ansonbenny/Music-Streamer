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
  getAllPlaylist: (userId, offset, limit, search) => {
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
              $match: {
                "data.name": {
                  $regex: search,
                  $options: "i",
                },
              },
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
              $match: {
                "data.name": {
                  $regex: search,
                  $options: "i",
                },
              },
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
  getUserPlaylists: (userId, search) => {
    return new Promise(async (resolve, reject) => {
      try {
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
              $match: {
                "data.name": {
                  $regex: search,
                  $options: "i",
                },
                "data.type": "playlist",
              },
            },
            {
              $limit: 10,
            },
            {
              $set: {
                _id: 1,
                id: "$data.id",
                type: "$data.type",
                name: "$data.name",
                short: "$data.short",
                images: "$data.images",
                playlistId: "$data.playlistId",
                items: "$data.items",
              },
            },
          ])
          .toArray();

        resolve({ data: response });
      } catch (err) {
        reject(err);
      }
    });
  },
  removeItemPlaylist: (userId, playlistId, trackId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await db.collection(collections.LIBRARY).updateOne(
          {
            _id: new ObjectId(userId),
            "data.playlistId": playlistId,
          },
          {
            $pull: {
              "data.$.items": {
                id: trackId,
              },
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
  addItemPlaylist: (userId, playlistId, track) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await db.collection(collections.LIBRARY).updateOne(
          {
            _id: new ObjectId(userId),
            "data.playlistId": playlistId,
          },
          {
            $push: {
              "data.$.items": track,
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
  checkTrackInPlaylist: (userId, trackId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response;

        response = await db
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
              $unwind: "$data.items",
            },
            {
              $project: {
                _id: 0,
                inPlaylist: {
                  $cond: {
                    if: {
                      $eq: [trackId, "$data.items.id"],
                    },
                    then: true,
                    else: false,
                  },
                },
              },
            },
            {
              $match: {
                inPlaylist: true,
              },
            },
            {
              $limit: 1,
            },
          ])
          .toArray();

        resolve({ data: response?.[0]?.inPlaylist });
      } catch (err) {
        reject(err);
      }
    });
  },
  getUserPlaylist: (userId, playlistId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let response = {};
        response.details = await db
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
              $project: {
                name: "$data.name",
                type: "$data.type",
                id: "$data.id",
                short: "$data.short",
                playlistId: "$data.playlistId",
              },
            },
            {
              $match: {
                playlistId: playlistId,
              },
            },
          ])
          .toArray();

        response.tracks = await db
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
              $project: {
                playlistId: "$data.playlistId",
                items: "$data.items",
              },
            },
            {
              $match: {
                playlistId: playlistId,
              },
            },
            {
              $unwind: "$items",
            },
            {
              $group: {
                _id: null,
                items: {
                  $push: "$items",
                },
                total: {
                  $sum: 1,
                },
              },
            },
            {
              $unwind: "$items",
            },
            {
              $skip: 0,
            },
            {
              $limit: 10,
            },
            {
              $group: {
                _id: 1,
                total: {
                  $first: "$total",
                },
                tracks: {
                  $push: "$items",
                },
              },
            },
          ])
          .toArray();

        if (response) {
          if (response?.details?.[0]) {
            response = {
              tracks: response?.tracks?.[0]?.tracks || [],
              total: response?.tracks?.[0]?.total || 0,
              offset: 0,
              details: response?.details?.[0],
            };
            resolve(response);
          } else {
            reject("Playlist not found");
          }
        }
      } catch (err) {
        reject(err);
      }
    });
  },
  getUserPlaylistTracks: (userId, offset, playlistId) => {
    return new Promise(async (resolve, reject) => {
      try {
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
              $project: {
                playlistId: "$data.playlistId",
                items: "$data.items",
              },
            },
            {
              $match: {
                playlistId: playlistId,
              },
            },
            {
              $unwind: "$items",
            },
            {
              $group: {
                _id: null,
                items: {
                  $push: "$items",
                },
                total: {
                  $sum: 1,
                },
              },
            },
            {
              $unwind: "$items",
            },
            {
              $skip: offset,
            },
            {
              $limit: 10,
            },
            {
              $group: {
                _id: 1,
                total: {
                  $first: "$total",
                },
                tracks: {
                  $push: "$items",
                },
              },
            },
          ])
          .toArray();

        if (response) {
          resolve({ data: response?.[0] });
        }
      } catch (err) {
        reject(err);
      }
    });
  },
};
