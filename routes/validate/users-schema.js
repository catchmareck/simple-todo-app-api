'use strict';

const Is = require('../../utils/validator');

module.exports = {
    create: {
        body: {
            username: Is().required().string().maxLen(255),
            userEmail: Is().required().email(),
            firstName: Is().required().string(),
            lastName: Is().required().string(),
            password: Is().required().string()
        }
    },
    read: {
        params: {
            id: Is().required().string()
        }
    },
    login: {
        body: {
            username: Is().required().string(),
            password: Is().required().string()
        }
    }
};
