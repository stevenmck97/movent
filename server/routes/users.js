var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.post("/register", userController.registerUser);
// router.post("/login", userController.loginUser);
module.exports = router;
