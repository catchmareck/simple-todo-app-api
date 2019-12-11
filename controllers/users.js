'use strict';

const { User } = require('../models');
const logger = require('../utils/logger');

class UsersController {

    constructor(request, response) {

        this.request = request;
        this.response = response;

        this.model = new User();
    }

    list() {

        this.model.read({})
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    add() {

        const {
            username,
            userEmail,
            firstName,
            lastName,
        } = this.request.body;

        this.model.create({
            username,
            userEmail,
            firstName,
            lastName
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { userId } = this.request.params;

        this.model.read({ userId })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }
}

module.exports = UsersController;
