import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

// Routes

import userRoute from "./routes/user.js";
import { ConnectDB } from "./db/connection.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// for react static files
app.use(express.static("dist"));

app.use(cors({ credentials: true, origin: process.env.SITE_URL }));
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

// routes
app.use("/api/user/", userRoute);

app.get("/api", (req, res) => {
  res.send("Musicon Api");
});

// for render react static files
app.get("/*", (req, res) => {
  res.json("STATIC");
});

app.listen(port, () => {
  console.log(`Server Started Port : ${port}`);
  ConnectDB((err, res) => {
    if (err) {
      console.log(`MongoDB Getting An Error : ${err}`);
    } else if (res) {
      console.log("MongoDB Successfully Connected");
    }
  });
});
