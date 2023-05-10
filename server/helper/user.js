import { ObjectId } from "mongodb";
import bcrypt from "bcrypt";
import { db } from "../db/connection.js";
import collections from "../db/collections.js";

export default {
  register_request: (details) => {
    return new Promise(async (resolve, reject) => {
      let response;
      try {
        await db
          .collection(collections.TEMP)
          .createIndex({ email: 1 }, { unique: true });
        await db
          .collection(collections.TEMP)
          .createIndex({ expireAt: 1 }, { expireAfterSeconds: 3600 });

        let check = await db.collection(collections.USER).findOne({
          email: details.email.replace("_register", ""),
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
  register_complete: (id, secret) => {
    return new Promise(async (resolve, reject) => {
      let response;
      try {
        await db
          .collection(collections.USER)
          .createIndex({ email: 1 }, { unique: true });

        let already = await db.collection(collections.USER).findOne({
          _id: new ObjectId(id),
        });

        if (!already) {
          let temp = await db.collection(collections.TEMP).findOne({
            _id: new ObjectId(id),
            secret,
          });

          if (temp) {
            delete temp.secret;
            delete temp.expireAt;

            temp.email = temp.email.replace("_register", "");

            response = await db.collection(collections.USER).insertOne(temp);
          } else {
            reject({ status: 422, message: "Wrong Verification Details" });
          }
        } else {
          reject({ status: 422, message: "Already Registered" });
        }
      } catch (err) {
        if (err?.code === 11000) {
          reject({ status: 422, message: "Already Registered" });
        } else {
          reject(err);
        }
      } finally {
        if (response) {
          await db
            .collection(collections.TEMP)
            .deleteOne({
              _id: new ObjectId(id),
            })
            .catch((err) => {
              console.log("Temp Delete Error : ", err);
            });
          resolve(response);
        }
      }
    });
  },
  login_manual: (email, password) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await db.collection(collections.USER).findOne({
          email,
        });

        if (user) {
          let check = await bcrypt.compare(password, user?.password);

          if (check) {
            delete user.password;

            resolve(user);
          } else {
            reject({ status: 422, message: "Email or Password Wrong" });
          }
        } else {
          reject({ status: 422, message: "Email or Password Wrong" });
        }
      } catch (err) {
        reject(err);
      }
    });
  },
  get_user: (userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        let user = await db.collection(collections.USER).findOne({
          _id: new ObjectId(userId),
        });

        if (user) {
          delete user?.password;
          resolve(user);
        } else {
          reject({ status: 404 });
        }
      } catch (err) {
        reject(err);
      }
    });
  },
  forgot_request: (details) => {
    return new Promise(async (resolve, reject) => {
      let response;

      try {
        await db
          .collection(collections.TEMP)
          .createIndex({ email: 1 }, { unique: true });
        await db
          .collection(collections.TEMP)
          .createIndex({ expireAt: 1 }, { expireAfterSeconds: 3600 });

        let check = await db.collection(collections.USER).findOne({
          email: details.email.replace("_forgot", ""),
        });

        if (check) {
          details.password = await bcrypt.hash(details.password, 10);

          response = await db.collection(collections.TEMP).insertOne({
            ...details,
            _id: check._id,
            expireAt: new Date(),
          });
        } else {
          reject({ status: 405, message: "User Not Found" });
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
  forgot_complete: (id, secret) => {
    return new Promise(async (resolve, reject) => {
      let response;
      try {
        let temp = await db.collection(collections.TEMP).findOne({
          _id: new ObjectId(id),
          secret,
        });

        if (temp) {
          response = await db.collection(collections.USER).updateOne(
            {
              _id: new ObjectId(id),
            },
            {
              $set: {
                password: temp.password,
              },
            }
          );
        } else {
          reject({ status: 422, message: "Wrong Verification Details" });
        }
      } catch (err) {
        reject(err);
      } finally {
        if (response) {
          await db
            .collection(collections.TEMP)
            .deleteOne({
              _id: new ObjectId(id),
            })
            .catch((err) => {
              console.log("Temp Delete Error : ", err);
            });

          resolve(response);
        }
      }
    });
  },
};
