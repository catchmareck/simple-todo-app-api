'use strict';

const router = require('express').Router({ mergeParams: true });

const { TaskListsController } = require('../controllers');

const validate = require('../middleware/validate');
const TaskListsSchema = require('./validate/task-lists-schema');

router.get('/read/:id', validate(TaskListsSchema.read), (request, response) => {

    const controller = new TaskListsController(request, response);
    controller.details();
});

router.get('/read', (request, response) => {

    const controller = new TaskListsController(request, response);
    controller.list();
});

router.post('/create', validate(TaskListsSchema.create), (request, response) => {

    const controller = new TaskListsController(request, response);
    controller.add();
});

router.put('/update/:id', validate(TaskListsSchema.update), (request, response) => {

    const controller = new TaskListsController(request, response);
    controller.edit();
});

router.delete('/delete/:id', validate(TaskListsSchema.delete), (request, response) => {

    const controller = new TaskListsController(request, response);
    controller.delete();
});

module.exports = router;
