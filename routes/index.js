'use strict';

const router = require('express').Router({ mergeParams: true });

router.use('/tasks', require('./tasks'));

module.exports = router;
