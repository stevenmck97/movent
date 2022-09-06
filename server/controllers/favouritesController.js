const Favourites = require("../models/favourites");

exports.favourites_list = function (req, res, next) {
  Favourites.find().exec(function (err, list_favourites) {
    if (err) {
      return next(err);
    }
    res.json(list_favourites);
  });
};

exports.favourite_create = function (req, res, next) {
  //might need to be array
  const favourite = new Favourites({
    favourite: { movie: req.body },
  });

  favourite.save(function (err) {
    if (err) {
      return next(err);
    }
    res.json(favourite);
  });
};

exports.favourite_id = function (req, res, next) {
  Favourites.find({ "favourite.movie.id": parseInt(req.params.id) }).exec(
    function (err, favourite) {
      if (err) {
        return next(err);
      }
      res.json(favourite);
    }
  );
};
