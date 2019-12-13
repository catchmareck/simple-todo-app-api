'use strict';

const Task = require('./task');
const User = require('./user');
const Team = require('./team');
const TaskList = require('./task-list');
const UsersTasks = require('./user-task');

TaskList.hasMany(Task, { as: 'tasks', foreignKey: 'list_id' });
Task.belongsTo(TaskList, { foreignKey: 'list_id' });
Team.hasMany(TaskList, { as: 'tasklists', foreignKey: 'team_id' });
TaskList.belongsTo(Team, { foreignKey: 'team_id' });
Team.hasMany(User, { as: 'users', foreignKey: 'team_id' });
User.belongsTo(Team, { as: 'team', foreignKey: 'team_id' });
Team.belongsTo(User, { as: 'TeamAdmin', constraints: false, foreignKey: 'admin_id' });
User.belongsToMany(Task, { through: UsersTasks, foreignKey: 'user_id' });
Task.belongsToMany(User, { through: UsersTasks, foreignKey: 'task_id' });

module.exports = {
    Task,
    User,
    Team,
    TaskList,
    UsersTasks
};
