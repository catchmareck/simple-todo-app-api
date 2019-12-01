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
            userEmail: user_email,
            firstName: first_name,
            lastName: last_name,
        } = this.request.body;

        this.model.create({
            username,
            user_email,
            first_name,
            last_name
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { userId: user_id } = this.request.params;

        this.model.read({ user_id })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }
}

module.exports = UsersController;