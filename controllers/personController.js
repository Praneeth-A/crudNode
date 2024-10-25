const Person = require('../models/personModel');

exports.getPeople = async (req, res) => {
  const people = await Person.find();
  res.render('personList', { people });
};

exports.showCreateForm = (req, res) => {
  res.render('personForm', { person: {}, action: '/', method: 'POST' });
};

exports.createPerson = async (req, res) => {
  const { name, age, gender, mobileNumber } = req.body;
  await Person.create({ name, age, gender, mobileNumber });
  res.redirect('/');
};

exports.showEditForm = async (req, res) => {
  const person = await Person.findById(req.params.id);
  res.render('personForm', { person, action: `/${req.params.id}?_method=PUT`, method: 'POST' });
};

exports.updatePerson = async (req, res) => {
  const { name, age, gender, mobileNumber } = req.body;
  await Person.findByIdAndUpdate(req.params.id, { name, age, gender, mobileNumber });
  res.redirect('/');
};

exports.deletePerson = async (req, res) => {
  await Person.findByIdAndDelete(req.params.id);
  res.redirect('/');
};
