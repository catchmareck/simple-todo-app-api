'use strict';

const Validator = require('../../utils/validator')();

// TODO
module.exports = {
    read: {
        params: {
            id: Validator.string().required()
        }
    }
};
