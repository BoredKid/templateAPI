const express = require('express');

const router = express.Router();

// on va utiliser toutes les routes définit pour l'api
router.use('/hello', require('./hello.route.js'));

module.exports = router;
