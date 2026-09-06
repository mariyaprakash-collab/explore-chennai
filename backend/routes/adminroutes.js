const express = require("express");
const router = express.Router();

const {
    loginadmin,
} = require("../controllers/logincontroller")

router.get("/login", loginadmin)

module.exports = router;