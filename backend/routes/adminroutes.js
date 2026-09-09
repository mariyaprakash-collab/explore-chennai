const express = require("express");
const router = express.Router();

const {
    loginadmin,
} = require("../controllers/logincontroller")

router.post("/login", loginadmin)

module.exports = router;