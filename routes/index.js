'use strict';

const router = require('express').Router({ mergeParams: true });

router.use('/tasks', require('./tasks'));
router.use('/users', require('./users'));
router.use('/teams', require('./teams'));
router.use('/tasklists', require('./task-lists'));

module.exports = router;
