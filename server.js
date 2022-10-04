const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('express-flash');
const methodOverride = require('method-override');
const logger = require('morgan');

// router files 
const rootRoutes = require('./routes/root');

//config database
const connectDB = require('./config/database');

//use .env file
require('dotenv').config({ path: './config/.env' });

//connect to database
connectDB();

// config passport config
require('./config/passport')(passport);

// config session cookies
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.DB_STRING }),
    })
);

// passport middleware
app.use(passport.initialize());
app.use(passport.session());

//source of html templates
app.set('views', path.join(__dirname, 'views'));
//html engine to use
app.set('view engine', 'ejs');
//static assets folder
app.use(express.static(path.join(__dirname, 'public')))

//body parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//forms for Put / Delete
app.use(methodOverride('_method'));

//flash for errors
app.use(flash());

//morgan middleware (logging)
app.use(logger('dev'));

//route list
app.use('/', rootRoutes);
app.use('/home', rootRoutes);

//server running
app.listen($PORT, () => {
    console.log('Server is up and running!');
});