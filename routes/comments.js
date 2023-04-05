const express = require('express');
const passport = require('passport');
const router = express.Router();

const commentsController = require('../controllers/comments_controller');
router.post('/create-comment',passport.checkAuthentication,commentsController.createComment);
router.get('/destroy-comment/:id',passport.checkAuthentication,commentsController.destroyComment);

module.exports = router;