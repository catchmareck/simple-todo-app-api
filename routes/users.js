'use strict';

const router = require('express').Router({ mergeParams: true });

const { UsersController } = require('../controllers');

const validate = require('../middleware/validate');
const UsersSchema = require('./validate/users-schema');

router.get('/read/:id', validate(UsersSchema.read), (request, response) => {

    const controller = new UsersController(request, response);
    controller.details();
});

router.get('/read', (request, response) => {

    const controller = new UsersController(request, response);
    controller.list();
});

router.post('/create', validate(UsersSchema.create), (request, response) => {

    const controller = new UsersController(request, response);
    controller.add();
});

router.put('/update/:id', validate(UsersSchema.update), (request, response) => {

    const controller = new UsersController(request, response);
    controller.edit();
});

router.put('/login', validate(UsersSchema.login), (request, response) => {

    const controller = new UsersController(request, response);
    controller.login();
});

module.exports = router;
