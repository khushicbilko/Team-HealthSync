const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  rollNumber: String,
  year: String,
  degree: String,
  email: String,
  project: String,
  hobbies: String,
  certificate: String,
  internship: String,
  aim: String,
  image: String
});

module.exports = mongoose.model('Member', memberSchema);
