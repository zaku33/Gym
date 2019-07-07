const Joi = require('joi');

module.exports = {
    schemas: {
        login: Joi.object().keys({
            //email: Joi.string().email().required(), 
            //email: Joi.string().required(), // login by phone number
            username: Joi.string().required(),
            password: Joi.string().regex(/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/).min(6).required()
        }),
        loginadmin: Joi.object().keys({
            // username : Joi.string().username().required(),
            email: Joi.string().required(),
            password: Joi.string().regex(/^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/).min(6).required()
        }),
        userUpdateProfile: Joi.object().keys({
            nickname: Joi.string().required()
        }),
        userUpdateHomeInfo: Joi.object().keys({
            home_name: Joi.string().required()
        })
    },
}