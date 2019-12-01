'use strict';

const router = require('express').Router({ mergeParams: true });

router.use('/tasks', require('./tasks'));
router.use('/users', require('./users'));

module.exports = router;
