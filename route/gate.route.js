const express = require('express');

const router = express.Router();

// notre application ne propose que la route api mais on peut envisager
// d'autres route comme auth
router.use('/api', require('./api'));

module.exports = router;
