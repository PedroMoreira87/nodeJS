const mongoose = require('mongoose');

const Person = mongoose.model('Person', {
  name: String,
  salary: Number,
  approved: Boolean,
})

exports.Person = Person;
