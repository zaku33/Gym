const Joi = require('joi');
const bcrypt = require('bcrypt');
const {
    _extend
} = require('util');

const Admin = require('../models/admin.model');
const User = require('../models/user.model')
const {
    schemas
} = require('../config/_base.config')

async function ILogin(req, res, schema_login, SchemaModel) {
    let body = _extend({}, req.body);
    Joi.validate(body, schema_login, async err => {
        if (err) {
            res.status(422).send(err)
        } else {
            if (schema_login == schemas.Admin_Login) {
                let model = await SchemaModel.findOne({
                    email: body.email
                })
                if (!model || !bcrypt.compareSync(body.password, model.password))
                    res.status(404).send('Admin email or password does not match')
                else res.send(model.toJSON({
                    login: true
                }))
            } else if (schema_login == schemas.User_Login) {
                let model = await SchemaModel.findOne({
                    $or: [{
                        username: body.username
                    }, {
                        email: body.username
                    }]

                })
                if (!model || !bcrypt.compareSync(body.password, model.password))
                    res.status(404).send('Admin email or password does not match')
                else res.send(model.toJSON({
                    login: true
                }))
            }
        }
    });
}

module.exports = {
    admin_Login: (req, res) => {
        ILogin(req, res, schemas.Admin_Login, Admin)
    },
    user_Login: (req, res) => {
        ILogin(req, res, schemas.User_Login, User)
    }
}