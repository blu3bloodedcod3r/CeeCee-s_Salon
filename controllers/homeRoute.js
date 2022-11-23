const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('homepage')
})

router.get('/signup', async (req, res) => {
    res.render('signup')
})

router.get('/login', async (req, res) => {
    res.render('login')
})

router.get('/services', async (req, res) => {
    res.render('services')
})

module.exports = router 