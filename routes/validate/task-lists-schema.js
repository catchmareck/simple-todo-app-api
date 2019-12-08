'use strict';

const Is = require('../../utils/validator');

module.exports = {
    create: {
        body: {
            listName: Is().required().string().maxLen(255)
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
            listName: Is().required().string().maxLen(255)
        }
    },
    delete: {
        params: {
            id: Is().required().string()
        }
    }
};
