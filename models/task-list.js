'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class TaskList extends Model {

    create({ team_id, list_name }) {

        return TaskList.create({ list_name })
            .then((record) => {

                record.setTeam(team_id);
                return record.save();
            })
    }

    read({ team_id, list_id }) {

        return TaskList.findOne({
            where: {
                ...!!team_id && { team_id },
                ...!!list_id && { list_id }
            }
        });
    }

    update({ list_id, list_name }) {

        return TaskList.update({ list_name }, { where: { list_id }});
    }

    delete({ list_id }) {

        return TaskList.destroy({ where: { list_id } });
    }
}

TaskList.init({
    listId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    listName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    }
}, {
    sequelize,
    modelName: 'tasklist',
    underscored: true
});

module.exports = TaskList;
