'use strict';

const router = require('express').Router({ mergeParams: true });

const { TeamsController } = require('../controllers');

const validate = require('../middleware/validate');
const TeamsSchema = require('./validate/team-schema');

router.get('/read/:id', validate(TeamsSchema.read), (request, response) => {

    const controller = new TeamsController(request, response);
    controller.details();
});

router.post('/create', validate(TeamsSchema.create), (request, response) => {

    const controller = new TeamsController(request, response);
    controller.add();
});

router.put('/update/:teamId/members/add/:memberId', validate(TeamsSchema.addMember), (request, response) => {

    const controller = new TeamsController(request, response);
    controller.addMember();
});

router.put('/update/:teamId/members/delete/:memberId', validate(TeamsSchema.deleteMember), (request, response) => {

    const controller = new TeamsController(request, response);
    controller.deleteMember();
});

router.put('/update/:id', validate(TeamsSchema.update), (request, response) => {

    const controller = new TeamsController(request, response);
    controller.edit();
});

module.exports = router;
