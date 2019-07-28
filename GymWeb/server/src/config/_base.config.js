const Joi = require('joi');

module.exports = {
    schemas: {
        User_Login: Joi.object().keys({
            username: Joi.string().required(),
            password: Joi.string().regex(/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/).min(6).required()
        }),
        Admin_Login: Joi.object().keys({
            email: Joi.string().required(),
            password: Joi.string().regex(/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/).min(6).required()
        })
    },
}