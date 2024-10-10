const mongoose = require("mongoose");
dataSchema = mongoose.Schema({
  original_message: String,
  translated_message: String,
  language: String,
  model: String,
  created_at: Date,
});

module.exports = mongoose.model("Data", dataSchema);
