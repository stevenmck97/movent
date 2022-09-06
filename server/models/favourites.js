const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
  favourite: { movie: { type: Object }, tv: { type: Object } },
});

FavouriteSchema.virtual("url").get(function () {
  return "/favourites/" + this.favourite.movie.id;
});

module.exports = mongoose.model("Favourite", FavouriteSchema);
