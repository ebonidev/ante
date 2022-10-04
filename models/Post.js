const mongoose = require('mongoose');
//const Supporter = require('../models/Supporter');

const PostSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  creationDate: {
    type: Date,
    default: Date.now
  },
  statusClosed: {
    type: Boolean,
    default: false
  },
  image: {
    type: String,
    require: true
  },
  cloudinaryId: {
    type: String,
    require: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcat: {
    type: String,
    required: true
  },
  urgentFlag: {
    type: String,
    required: true
  }
  //,
  //recipients: {
  //type: [Supporter],
  //default: undefined
  //}
});

module.exports = mongoose.model('Post', PostSchema);
