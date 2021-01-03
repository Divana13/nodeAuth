const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(express.static('public'));

// View Engine
app.set('view engine', 'ejs');

// Connect to DB
const dbURL = 'mongodb+srv://dint:dint395799@nodeninja.ovbsv.mongodb.net/nodeAuth';
mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

// View Route
app.get('/', (req, res) =>{ res.render('home')});
app.get('/smoothies', (req, res) =>{ res.render('smoothies')});
app.use(authRoutes);