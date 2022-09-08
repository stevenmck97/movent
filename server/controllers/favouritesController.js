const Favourites = require("../models/favourites");
const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

exports.favourites_list = function (req, res, next) {
  Favourites.find({ user: req.user.id }).exec(function (err, list_favourites) {
    if (err) {
      return next(err);
    }
    res.json(list_favourites);
  });
};

exports.favourite_create = function (req, res, next) {
  //might need to be array
  const favourite = new Favourites({
    user: req.user.id,
    favourite: { movie: req.body },
  });

  favourite.save(function (err) {
    if (err) {
      return next(err);
    }
    res.json(favourite);
  });
};

exports.favourite_id = asyncHandler(async function (req, res, next) {
  const user = await User.findById(req.user.id);
  const favourite = await Favourites.findOne({
    user: req.user.id,
    "favourite.movie.id": parseInt(req.params.id),
  });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (favourite.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  Favourites.find({ "favourite.movie.id": parseInt(req.params.id) }).exec(
    function (err, favourite) {
      if (err) {
        return next(err);
      }
      res.json(favourite);
    }
  );
});

exports.favourite_delete = asyncHandler(async function (req, res, next) {
  const user = await User.findById(req.user.id);
  const favourite = await Favourites.findOne({
    user: req.user.id,
    "favourite.movie.id": parseInt(req.params.id),
  });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (favourite.user.toString() !== user.id) {
    res.status(401);
    throw new Error("Not authorized");
  }

  Favourites.findOneAndDelete(
    { "favourite.movie.id": parseInt(req.params.id) },
    function (err, favourite) {
      if (err) {
        return next(err);
      }
      res.json(favourite);
    }
  );
});
