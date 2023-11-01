const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    match: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    type: String,
    required: true,
  },
  activeLists: [
    {
      type: Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  archivedLists: [
    {
      type: Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  /* NEED TO FIX THIS EVENTUALLY */
  savedStores: [String],
});

// Hashes Password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Checks if Password is Correct
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Create the User model
const User = mongoose.model("User", userSchema);

module.exports = User;
