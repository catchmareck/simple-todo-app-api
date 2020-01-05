'use strict';

const router = require('express').Router({ mergeParams: true });

const { RolesController } = require('../controllers');

const validate = require('../middleware/validate');
const RolesSchema = require('./validate/roles-schema');

router.get('/read', (request, response) => {

    const controller = new RolesController(request, response);
    controller.list();
});

router.get('/read/:id', validate(RolesSchema.read), (request, response) => {

    const controller = new RolesController(request, response);
    controller.details();
});

router.post('/create', validate(RolesSchema.create), (request, response) => {

    const controller = new RolesController(request, response);
    controller.add();
});

router.put('/update/:roleId/capability/add', validate(RolesSchema.addCapability), (request, response) => {

    const controller = new RolesController(request, response);
    controller.addCapability();
});

router.put('/update/:roleId/capability/delete/:capId', validate(RolesSchema.deleteCapability), (request, response) => {

    const controller = new RolesController(request, response);
    controller.deleteCapability();
});

router.put('/update/:id', validate(RolesSchema.update), (request, response) => {

    const controller = new RolesController(request, response);
    controller.edit();
});

module.exports = router;
