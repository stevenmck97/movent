const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
  favourite: { type: Object, required: true },
});

FavouriteSchema.virtual("url").get(function () {
  return "/favourites/" + this._id;
});

module.exports = mongoose.model("Favourite", FavouriteSchema);
