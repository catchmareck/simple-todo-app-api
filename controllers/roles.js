'use strict';

const { Role, RoleCapability } = require('../models');
const logger = require('../utils/logger');

class RolesController {

    constructor(request, response) {

        this.request = request;
        this.response = response;

        this.model = new Role();
        this.capModel = new RoleCapability();
    }

    list() {

        this.model.read({})
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    add() {

        const {
            roleName
        } = this.request.body;

        this.model.create({
            roleName
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    edit() {

        const { id: roleId } = this.request.params;
        const { roleName } = this.request.body;

        this.model.update({
            roleId,
            roleName
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    details() {

        const { id: roleId } = this.request.params;

        this.model.read({ roleId })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    addCapability() {

        const { roleId } = this.request.params;
        const { capName } = this.request.body;

        this.capModel.create({
            roleId,
            capName
        })
            .then((result) => this.response.send(result))
            .catch(logger.error);
    }

    deleteCapability() {

        const { capId } = this.request.params;

        this.capModel.delete({ capId })
            .then(() => this.response.sendStatus(200))
            .catch(logger.error);
    }
}

module.exports = RolesController;