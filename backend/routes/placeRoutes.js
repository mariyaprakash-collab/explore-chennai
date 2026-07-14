const express = require("express");
const router = express.Router();

const {
  getPlacesByCategory,
} = require("../controllers/placeController");

router.get("/:category", getPlacesByCategory);

module.exports = router;