var express = require('express');
var router = express.Router();
var authController = require('../controllers/auth');
var indexController = require('../controllers/index');
var postController = require('../controllers/post');
var { ensureAuth, ensureGuest } = require('../config/auth');


//Main Routes - simplified for now

router.get('/', indexController.getIndex);
router.get('/login', authController.getLogin);
router.post('/login', authController.postLogin);
router.get('/logout', authController.logout);
router.get('/signup', authController.getSignup);
router.post('/signup', authController.postSignup);

router.get('/home', ensureAuth, postController.getHome);

//router.get("/profile", ensureAuth, postsController.getProfile);
//router.get("/feed", ensureAuth, postsController.getFeed);

module.exports = router;
