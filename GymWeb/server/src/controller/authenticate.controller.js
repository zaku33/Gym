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

// Admin login
exports.login = (req, res) => {
    let body = _extend({}, req.body);
    Joi.validate(body, schemas.loginadmin, err => {
        if (err) {
            res.status(422).send(err)
        } else {
            const admin = Admin.findOne({email:body.email})
            Admin.findOne({
                email: body.email
            }).populate('roles').then(async admin => {
                if (!admin || !bcrypt.compareSync(body.password, admin.password)) {
                    res.status(404).send('Admin email or password does not match')
                } else {
                    res.send(admin.toJSON({
                        login: true
                    }))
                }
            }).catch(err => {
                res.status(500).send(err.message)
            });
        }
    });
};

//User login
exports.userLogin = (req, res) => {
    let body = _extend({}, req.body);
    Joi.validate(body, schemas.login, err => {
        if (err) {
            // console.log(err);
            res.status(422).send('username or password is invalid');
        } else {
            const regexLogin = new RegExp(`^${body.username}$`, "i");
            User.findOne({
                username: regexLogin
            }).then(async user => {
                if (!user || !bcrypt.compareSync(body.password, user.password)) {
                    res.status(499).send('username or password does not match');
                } else {
                    res.send(user.toJSON({
                        login: true,
                    }))
                }
            }).catch(err => {
                // console.log(err);
                res.status(422).send(err.message)
            });
        }
    });
}