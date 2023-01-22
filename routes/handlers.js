import express from "express";
const router = express.Router();

import { orm } from "../config/orm.js";

// Routing
router.get("/", (req, res) => {
  res.render("index", { layout: false });
});

router.get("/db", (req, res) => {
  orm.getInfo(function (err) {
    if (err) {
      return res.status(501).json({
        message: "Can't connect to database",
      });
    }
  });
});

router.post("/", (req, res) => {
  res.send("POST request to the homepage");
});

export default router;
