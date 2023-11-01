const { Schema, model } = require("mongoose");

const listItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  size: {
    type: String,
  },
  url: {
    type: String,
    required: true,
  },
});

const ListItem = mongoose.model("ListItem", listItemSchema);

module.exports = ListItem;
