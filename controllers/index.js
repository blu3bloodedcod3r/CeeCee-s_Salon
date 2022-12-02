const router = require('express').Router();

const homeRoutes = require('./homeRoute')
const apiRoutes = require('./api');
const bookRoute = require('./bookRoute')
const adminRoute = require('./adminRoute');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/book', bookRoute)
router.use('/admin', adminRoute);

module.exports = router;