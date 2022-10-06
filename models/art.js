//load mongoose
const mongoose = require("mongoose");
//define schema
const Schema = mongoose.Schema;
//create log Schema
const artSchema = new Schema({
  title: { type: String, required: true },
  imageurl:{type: String},
  image: { type: String },
  imageFullname: { type: String, require: true },
  size:{ type: Schema.Types.Mixed, required: true },
  price: { type: Number, required: true },
  artist: { type: String, required: true },
  description: { type: String, required: true },
  count: { type: String, required: true },
});

const Art = mongoose.model("Art", artSchema);
module.exports = Art;
