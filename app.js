const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const personRoutes = require('./routes/personRoutes');
const expressEjsLayouts=require('express-ejs-layouts')
const ejs=require('ejs')
const path = require('path')

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/personDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// app.use(expressEjsLayouts)
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method')); // To use PUT/DELETE in forms

// Routes
app.use('/', personRoutes);

// npm init -y
app.listen(5000, () => {
  console.log('Server started on port 3000');
});
