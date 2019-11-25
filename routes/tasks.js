'use strict';

const { TasksController } = require('../controllers');

const validate = require('../middleware/validate');
const TaskSchema = require('./validate/tasks-schema');

const router = require('express').Router({ mergeParams: true });

router.get('/read/:id', validate(TaskSchema.read), (request, response) => {

    const controller = new TasksController(request, response);
    controller.details();
});

router.get('/read', (request, response) => {

    const controller = new TasksController(request, response);
    controller.list();
});

router.post('/create', validate(TaskSchema.create), (request, response) => {

    const controller = new TasksController(request, response);
    controller.add();
});

router.put('/update/:id', validate(TaskSchema.update), (request, response) => {

    const controller = new TasksController(request, response);
    controller.edit();
});

router.delete('/delete/:id', validate(TaskSchema.delete), (request, response) => {

    const controller = new TasksController(request, response);
    controller.delete();
});

module.exports = router;
