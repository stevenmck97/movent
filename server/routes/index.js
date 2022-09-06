var express = require("express");
var router = express.Router();
const favourites_controller = require("../controllers/favouritesController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/favourites", favourites_controller.favourites_list);
router.post("/favourites", favourites_controller.favourite_create);
router.get("/favourites/:id", favourites_controller.favourite_id);

module.exports = router;
