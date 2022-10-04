const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');
const { ensureAuth } = require('../controllers/auth');
const upload = require("../middleware/multer");

router.get('/:id', ensureAuth, postController.getHome);
router.post('/send', ensureAuth, postController.makeRequest);
//router.post('/invite', groupController.invite);
//router.put('/addShame', todosController.addShame);
//router.delete('/deleteTodo', todosController.deleteTodo);

module.exports = router;
