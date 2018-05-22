const express = require('express');

const helloRoute = require('./api/hello.route.js');

const router = express.Router();

router.use('/hello', helloRoute);

module.exports = router;
