import axios from "axios";
import qs from "querystring";
import dotnev from "dotenv";

dotnev.config();

const spotify = async (callback) => {
  let data = qs.stringify({
    grant_type: "client_credentials",
    client_secret: process.env.SPOTIFY_SECRET,
    client_id: process.env.SPOTIFY_ID,
  });

  let res;

  try {
    res = await axios.post(`https://accounts.spotify.com/api/token?${data}`);
  } catch (err) {
    callback(
      {
        status: err?.response?.status || 500,
        message: err?.response?.data?.error || "Something Wrong",
      },
      undefined
    );
  } finally {
    if (res) {
      let instance = axios.create({
        baseURL: "https://api.spotify.com/v1/",
        headers: {
          Authorization: `Bearer ${res?.data?.access_token}`,
        },
      });

      callback(undefined, instance);
    }
  }
};

export { spotify };
