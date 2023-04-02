const express = require("express");
const registerUser = require("../controllers/userController");
const router = express.Router();

router.route("/register").post(function (req, res) {
  registerUser;
});

module.exports = router;
