'use strict';

module.exports = (schema) => (request, response, next) => {

    const toValidate = Object.keys(schema);

    for (let validationData of toValidate) {

        for (let key in schema[validationData]) {

            const valid = schema[validationData][key].evaluate(request[validationData][key]);
            if (!valid) {
                return response.sendStatus(400);
            }
        }
    }

    next();
};
