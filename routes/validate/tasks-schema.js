'use strict';

const Is = require('../../utils/validator');

module.exports = {
    create: {
        body: {
            listId: Is().required().number(),
            taskTitle: Is().required().string().maxLen(255),
            taskDescription: Is().required().string(),
            isDone: Is().required().boolean(),
            taskDeadline: Is().required().date(),
            assignees: Is().optional().array(['number'])
        }
    },
    read: {
        params: {
            id: Is().required().string()
        }
    },
    update: {
        params: {
            id: Is().required().string()
        },
        body: {
            listId: Is().required().number(),
            taskTitle: Is().required().string().maxLen(255),
            taskDescription: Is().required().string(),
            isDone: Is().required().boolean(),
            taskDeadline: Is().required().date(),
            assignees: Is().optional().array(['number'])
        }
    },
    delete: {
        params: {
            id: Is().required().string()
        }
    }
};
