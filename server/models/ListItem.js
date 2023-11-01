const { Schema, model } = require("mongoose");

const listItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: Number,
    required: true,
  },
  itemSize: {
    type: String,
  },
  itemUrl: {
    type: String,
    required: true,
  },
});

const ListItem = mongoose.model("ListItem", listItemSchema);

module.exports = ListItem;
