const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./servicesRoutes');

router.use('/users', userRoutes);
router.use('/services', servicesRoutes);

module.exports = router;