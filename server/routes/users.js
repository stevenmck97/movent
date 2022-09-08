var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");
const { protect } = require("../middleware/auth");

/* GET users listing. */
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/currentUser", protect, userController.currentUser);
module.exports = router;
