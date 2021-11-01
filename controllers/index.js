const router = require('express').Router();

//const apiRoutes = require('./api_routes');
const homeRoutes = require('./home_routes.js');
const apiRoutes = require('./api_routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;