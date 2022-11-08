const mongoose = require("mongoose");

const memberSchema = mongoose.Schema({
  member: { type: String, require: true },
});

module.exports = mongoose.model("member", memberSchema);
