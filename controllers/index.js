const router = require('express').Router();

const homeRoutes = require('./homeRoute')
const apiRoutes = require('./api');

<<<<<<<<< Temporary merge branch 1
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
=========
// router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
// router.use('/', homeRoutes);
>>>>>>>>> Temporary merge branch 2

module.exports = router;