const { Schema, model } = require("mongoose");

const listSchema = new mongoose.Schema({
  Active: { type: Boolean, required: true, default: true },
  Title: { type: String, required: true },
  Price: Number,
  Size: String,
  Url: String,
  Items: [{ type: Schema.Types.ObjectId, ref: "ListItem" }],
});

const List = mongoose.model("List", listSchema);

module.exports = List;
