'use strict';

const { TasksController } = require('../controllers');

const validate = require('../middleware/validate');
const TaskSchema = require('./validate/tasks-schema');

const router = require('express').Router({ mergeParams: true });

// TODO
router.get('/read/:id', validate(TaskSchema.read), (request, response) => {

    response.send('TODO');
});

module.exports = router;
