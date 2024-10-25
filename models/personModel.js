const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    match: /^[a-zA-Z\s]*$/, // Only characters
  },
  age: {
    type: Number,
    required: true,
    min: 1,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Must be a valid 10-digit number
  },
});

module.exports = mongoose.model('Person', personSchema);
