const mongoose = require('mongoose');

const Document = new mongoose.Schema({
  _id: String,
  data: String,
});

module.exports = mongoose.model('Document', Document);
