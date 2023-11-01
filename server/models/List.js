const { Schema, model } = require("mongoose");

const listSchema = new mongoose.Schema({
  active: {
    type: Boolean,
    required: true,
    default: true,
  },
  title: {
    type: String,
    required: true,
  },
  listItems: [
    {
      type: Schema.Types.ObjectId,
      ref: "ListItem",
    },
  ],
});

const List = mongoose.model("List", listSchema);

module.exports = List;
