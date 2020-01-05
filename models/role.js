'use strict';

const Sequelize = require('sequelize');
const sequelize = require('./db');

const Model = Sequelize.Model;

class Role extends Model {

    create({ roleName }) {

        return Role.create({ roleName });
    }

    read({ roleId }) {

        return Role.findOne({ where: { ...!!roleId && { roleId } }, include: [{ all: true }] });
    }

    update({ roleId, roleName}) {

        return Role.update({ roleName }, { where: { roleId }});
    }

    delete({ roleId }) {

        return Role.destroy({ where: { roleId } });
    }
}

Role.init({
    roleId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    roleName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            max: 255
        }
    }
}, {
    sequelize,
    modelName: 'role',
    underscored: true
});

module.exports = Role;
