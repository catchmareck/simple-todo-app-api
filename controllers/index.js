'use strict';

const TasksController = require('./tasks');
const UsersController = require('./users');
const TeamsController = require('./teams');
const TaskListsController = require('./task-lists');
const RolesController = require('./roles');

module.exports = {
    TasksController,
    UsersController,
    TeamsController,
    TaskListsController,
    RolesController
};
