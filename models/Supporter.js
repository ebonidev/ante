const mongoose = require('mongoose');

const SupporterSchema = new mongoose.Schema({
  userName: String,
});

module.exports = mongoose.model("Supporter", SupporterSchema);
