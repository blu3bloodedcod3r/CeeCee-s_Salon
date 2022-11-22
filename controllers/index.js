const router = require('express').Router();

const homeRoutes = require('./homeRoute')
const apiRoutes = require('./api');

// router.use('/', homeRoutes);
router.use('/api', apiRoutes);
// router.use('/', homeRoutes);

module.exports = router;