const router = require('express').Router();
const { User, Appt, Services } = require('../models');

router.get('/', async (req, res) => {
    res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
});

router.get('/signup', async (req, res) => {
    res.render('signup')
});

router.get('/login', async (req, res) => {
//     console.log(req.session.loggedIn)
//   if (req.session.loggedIn) {
//     alert("you are already logged in")
//     // res.redirect('/');
//     return;
//   }
  res.render('login');
});

router.get('/services', async (req, res) => {
    res.render('services')
});

module.exports = router 