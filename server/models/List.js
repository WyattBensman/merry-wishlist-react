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
    enum: [
      "-",
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL",
      "U.S. Men 4",
      "U.S. Men 4.5",
      "U.S. Men 5",
      "U.S. Men 5.5",
      "U.S. Men 6",
      "U.S. Men 6.5",
      "U.S. Men 7",
      "U.S. Men 7.5",
      "U.S. Men 8",
      "U.S. Men 8.5",
      "U.S. Men 9",
      "U.S. Men 9.5",
      "U.S. Men 10",
      "U.S. Men 10.5",
      "U.S. Men 11",
      "U.S. Men 11.5",
      "U.S. Men 12",
      "U.S. Men 12.5",
      "U.S. Men 13",
      "U.S. Women 4",
      "U.S. Women 4.5",
      "U.S. Women 5",
      "U.S. Women 5.5",
      "U.S. Women 6",
      "U.S. Women 6.5",
      "U.S. Women 7",
      "U.S. Women 7.5",
      "U.S. Women 8",
      "U.S. Women 8.5",
      "U.S. Women 9",
      "U.S. Women 9.5",
      "U.S. Women 10",
      "U.S. Women 10.5",
      "U.S. Women 11",
      "U.S. Women 11.5",
      "U.S. Women 12",
      "U.S. Women 12.5",
      "U.S. Women 13",
    ],
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
