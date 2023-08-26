const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const app = express();
const coreRoute = require('./routes/core');
const usersRoute = require('./routes/users')
const path = require('path');
const bodyParser = require('body-parser');


// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,"public")));
app.use(bodyParser.urlencoded({ extended : false }));

//Routes
app.use('/', coreRoute)
app.use('/users', usersRoute)


const dbURL = 'mongodb://localhost:27017/authenticationDB'

mongoose.connect(dbURL, { family : 4}, { useNewUrlParser: true, useUnifiedTopology: true  } )
    .then(() => console.log('Successfully Connected to Database...'))
    .catch((err) => console.log(err));















const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on  ${PORT}`));