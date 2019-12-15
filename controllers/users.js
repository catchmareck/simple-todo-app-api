'use strict';

const bcrypt = require('bcryptjs');
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

    async add() {

        const {
            username,
            userEmail,
            firstName,
            lastName,
            password
        } = this.request.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        this.model.create({
            username,
            userEmail,
            firstName,
            lastName,
            password: hashedPassword
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { id: userId } = this.request.params;

        this.model.read({ userId })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    async login() {

        const { username, password } = this.request.body;

        this.model.read({ username })
            .then(async (result) => {

                const [ user ] = result;
                if (user) {

                    const match = await bcrypt.compare(password, user.password);

                    if (match) {

                        this.request.session.user = user;
                        return this.response.send(user);
                    }
                }

                return this.response.status(401).send({ message: 'Wrong username or password' });
            })
            .catch(logger.error);
    }
}

module.exports = UsersController;
