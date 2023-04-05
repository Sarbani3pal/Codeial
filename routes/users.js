const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');
router.get('/profile/:id',passport.checkAuthentication,usersController.profile);
router.post('/profile/update',passport.checkAuthentication,usersController.profileUpdate);
router.get('/sign-up',passport.checkSignIn,usersController.signUp);
router.get('/sign-in',passport.checkSignIn,usersController.signIn);
router.get('/sign-out',passport.checkAuthentication,usersController.destroySession);
router.post('/create',usersController.create);
router.post('/create-session',passport.authenticate(
    'local',
    {
        failureRedirect: '/users/sign-in'
    }),
    usersController.createSession);
module.exports = router;