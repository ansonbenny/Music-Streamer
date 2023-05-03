import { Router } from "express";

let router = Router();

router.get("/", (req, res) => {
  res.send("User");
});

export default router;
