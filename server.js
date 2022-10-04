var express = require('express');
var app = express();
var passport = require('passport');
var path = require('path');
var session = require('express-session');
var MongoStore = require('connect-mongo');
var flash = require('express-flash');
var methodOverride = require('method-override');
var logger = require('morgan');

// router files 
var rootRoutes = require('./routes/root');

//config database
var connectDB = require('./config/database');

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
app.listen(process.env.PORT, () => {
    console.log('Server is up and running!');
});