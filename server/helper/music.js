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
          playlists: [details],
        });
      } catch (err) {
        if (err?.code === 11000) {
          response = await db
            .collection(collections.LIBRARY)
            .updateOne(
              {
                _id: new ObjectId(userId),
                "playlists.playlistId": {
                  $ne: details.playlistId,
                },
              },
              {
                $addToSet: {
                  playlists: details,
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
              playlists: details,
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
          "playlists.playlistId": `${id}_${type}`,
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
              $unwind: "$playlists",
            },
            {
              $match: {
                "playlists.name": {
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
              $unwind: "$playlists",
            },
            {
              $match: {
                "playlists.name": {
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
                id: "$playlists.id",
                type: "$playlists.type",
                name: "$playlists.name",
                short: "$playlists.short",
                images: "$playlists.images",
                playlistId: "$playlists.playlistId",
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
            "playlists.playlistId": playlistId,
          },
          {
            $set: {
              "playlists.$.name": name,
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
              $unwind: "$playlists",
            },
            {
              $match: {
                "playlists.name": {
                  $regex: search,
                  $options: "i",
                },
                "playlists.type": "playlist",
              },
            },
            {
              $limit: 10,
            },
            {
              $set: {
                _id: 1,
                id: "$playlists.id",
                type: "$playlists.type",
                name: "$playlists.name",
                short: "$playlists.short",
                images: "$playlists.images",
                playlistId: "$playlists.playlistId",
                items: "$playlists.items",
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
            "playlists.playlistId": playlistId,
          },
          {
            $pull: {
              "playlists.$.items": {
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
            "playlists.playlistId": playlistId,
          },
          {
            $addToSet: {
              "playlists.$.items": track,
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
              $unwind: "$playlists",
            },
            {
              $unwind: "$playlists.items",
            },
            {
              $project: {
                _id: 0,
                inPlaylist: {
                  $cond: {
                    if: {
                      $eq: [trackId, "$playlists.items.id"],
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
              $unwind: "$playlists",
            },
            {
              $project: {
                name: "$playlists.name",
                type: "$playlists.type",
                id: "$playlists.id",
                short: "$playlists.short",
                playlistId: "$playlists.playlistId",
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
              $unwind: "$playlists",
            },
            {
              $project: {
                playlistId: "$playlists.playlistId",
                items: "$playlists.items",
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
  getUserPlaylistTracks: (userId, offset, playlistId, limit = 10) => {
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
              $unwind: "$playlists",
            },
            {
              $project: {
                playlistId: "$playlists.playlistId",
                items: "$playlists.items",
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
              $limit: limit,
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
  recentActivity: (userId, artist) => {
    return new Promise(async (resolve, reject) => {
      try {
        let total = await db
          .collection(collections.ACTIVITY)
          .aggregate([
            {
              $match: {
                _id: new ObjectId(userId),
              },
            },
            {
              $unwind: "$items",
            },
            {
              $group: {
                _id: 1,
                value: {
                  $sum: 1,
                },
              },
            },
          ])
          .toArray();

        if (total?.[0]?.value >= 10) {
          let remove = await db.collection(collections.ACTIVITY).updateOne(
            {
              _id: new ObjectId(userId),
            },
            {
              $pop: {
                items: -1,
              },
            }
          );

          if (remove) {
            await db.collection(collections.ACTIVITY).updateOne(
              {
                _id: new ObjectId(userId),
              },
              {
                $push: {
                  items: { name: artist },
                },
              },
              {
                upsert: true,
              }
            );

            resolve();
          }
        } else {
          await db.collection(collections.ACTIVITY).updateOne(
            {
              _id: new ObjectId(userId),
            },
            {
              $push: {
                items: { name: artist },
              },
            },
            {
              upsert: true,
            }
          );

          resolve();
        }
      } catch (err) {
        console.log(err);
        resolve();
      }
    });
  },
  getRecentActivity: (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let total = await db
          .collection(collections.ACTIVITY)
          .aggregate([
            {
              $match: {
                _id: new ObjectId(userId),
              },
            },
            {
              $unwind: "$items",
            },
            {
              $group: {
                _id: 1,
                value: {
                  $sum: 1,
                },
              },
            },
          ])
          .toArray();

        if (total?.[0]) {
          let random = Math.random() * total?.[0]?.value || 0;

          random = Math.floor(random);

          let res = await db
            .collection(collections.ACTIVITY)
            ?.aggregate([
              {
                $match: {
                  _id: new ObjectId(userId),
                },
              },
              {
                $project: {
                  artist: {
                    $arrayElemAt: ["$items", random],
                  },
                },
              },
            ])
            .toArray();

          resolve({ artist: res?.[0]?.artist?.name });
        } else {
          resolve({ artist: null });
        }
      } catch (err) {
        resolve({ artist: null });
      }
    });
  },
  addToHistory: (userId, details) => {
    return new Promise(async (resolve, reject) => {
      if (details) {
        let response;
        try {
          response = await db.collection(collections.LIBRARY).insertOne({
            _id: new ObjectId(userId),
            history: [
              {
                ...details,
                date: new Date(),
              },
            ],
          });
        } catch (err) {
          if (err?.code === 11000) {
            let del = await db
              .collection(collections.LIBRARY)
              .updateOne(
                {
                  _id: new ObjectId(userId),
                },
                {
                  $pull: {
                    history: {
                      type: details?.type,
                      id: details?.id,
                    },
                  },
                }
              )
              .catch(async () => {
                response = await db
                  .collection(collections.LIBRARY)
                  .updateOne(
                    {
                      _id: new ObjectId(userId),
                      "history.id": {
                        $ne: details?.id,
                      },
                    },
                    {
                      $addToSet: {
                        history: {
                          ...details,
                          date: new Date(),
                        },
                      },
                    }
                  )
                  .catch(() => {
                    resolve();
                  });
              });

            if (del) {
              response = await db
                .collection(collections.LIBRARY)
                .updateOne(
                  {
                    _id: new ObjectId(userId),
                  },
                  {
                    $push: {
                      history: {
                        ...details,
                        date: new Date(),
                      },
                    },
                  }
                )
                .catch(() => {
                  resolve();
                });
            }
          } else {
            resolve();
          }
        } finally {
          if (response) {
            resolve(response);
          }
        }
      } else {
        resolve();
      }
    });
  },
  getHistory: (userId, search, offset, limit) => {
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
              $unwind: "$history",
            },
            {
              $match: {
                "history.name": {
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
              $unwind: "$history",
            },
            {
              $match: {
                "history.name": {
                  $regex: search,
                  $options: "i",
                },
              },
            },
            {
              $sort: {
                "history.date": -1,
              },
            },
            {
              $skip: offset,
            },
            {
              $limit: limit,
            },
            {
              $group: {
                _id: 1,
                item: {
                  $push: "$history",
                },
              },
            },
          ])
          .toArray();

        resolve({
          data: response?.[0]?.item,
          total: total?.[0]?.value || 0,
        });
      } catch (err) {
        reject(err);
      }
    });
  },
  clearHistory: (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await db.collection(collections.LIBRARY).updateOne(
          {
            _id: new ObjectId(userId),
          },
          {
            $set: {
              history: [],
            },
          }
        );

        resolve(res);
      } catch (err) {
        reject(err);
      }
    });
  },
};
