import { Router } from "express";
import { spotify } from "../spotify/api.js";

const router = Router();

router.get("/all", (req, res) => {
  spotify(async (err, instance) => {
    if (instance) {
      let response;
      try {
        let collection = await instance.get(
          `/search?q=year%3A${new Date().getFullYear()}&type=album%2Cartist%2Ctrack&limit=10`
        );

        let collection2 = await instance.get(
          `/search?q=year%3A${new Date().getFullYear()}&type=album%2Ctrack&offset=10&limit=10`
        );

        if (collection && collection2) {
          response = {
            ...collection?.data,
            tracks_2: { ...collection2?.data?.tracks },
            albums_2: { ...collection2?.data?.albums },
          };
        }
      } catch (err) {
        if (err?.response?.status) {
          return res.status(err?.response?.status).json({
            status: err?.response?.status,
            message: err?.response?.data?.error?.message || "Something Wrong",
          });
        } else {
          return res.status(500).json({
            status: 500,
            message: "Something Wrong",
          });
        }
      } finally {
        if (response) {
          return res.status(200).json({
            status: 200,
            data: response,
          });
        }
      }
    } else {
      return res.status(err?.status).json(err);
    }
  });
});

router.get("/search", (req, res) => {
  const { search = "album", type, offset = 0 } = req.query;

  spotify(async (err, instance) => {
    if (instance) {
      let response;
      try {
        response = await instance.get(
          `/search?q=${search}&type=${
            type ? type : "album%2Cartist%2Ctrack"
          }&offset=${offset}&limit=${10}`
        );
      } catch (err) {
        console.log(err);
        if (err?.response?.status === 400) {
          response = {
            data: { [type]: { items: [] } },
          };
        } else if (err?.response?.status) {
          res.status(err?.response?.status).json({
            status: err?.response?.status,
            message: err?.response?.data?.error?.message || "Something Wrong",
          });
        } else {
          res.status(500).json({
            status: 500,
            message: "Something Wrong",
          });
        }
      } finally {
        if (response?.data) {
          res.status(200).json({
            status: 200,
            data: response?.data,
          });
        }
      }
    } else {
      res.status(err?.status).json(err);
    }
  });
});

export default router;
