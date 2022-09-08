var express = require("express");
var router = express.Router();
const favourites_controller = require("../controllers/favouritesController");
const { protect } = require("../middleware/auth");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/favourites", protect, favourites_controller.favourites_list);
router.post("/favourites", protect, favourites_controller.favourite_create);
router.get("/favourites/:id", protect, favourites_controller.favourite_id);
router.delete(
  "/favourites/:id",
  protect,
  favourites_controller.favourite_delete
);

module.exports = router;
