const { Schema, model } = require("mongoose");

const itemSchema = new Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
  },
  itemPrice: {
    type: Number,
    required: true,
    trim: true,
  },
  itemSize: {
    type: String,
    trim: true,
  },
  itemUrl: {
    type: String,
    required: true,
    trim: true,
  },
});

const listSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  title: {
    type: String,
    required: true,
  },
  listItems: [itemSchema],
});

const List = model("List", listSchema);

module.exports = List;
