const bcrypt = require('bcrypt');

module.exports = {
    _Create: async (req, res) => {
        let body = req.body;
        body.password = bcrypt.hashSync(body.password, 10);
        body.access_token = bcrypt.hashSync(body.password, 10);

        let url = (req.url).replace('/', '');
        let Collection = require(`../models/${url}.model`)
        let model = await new Collection(body);
        res.send(model)
    },
    _ReadAll: async (req, res) => {
        let url = (req.url).replace('/', '');
        let Collection = require(`../models/${url}.model`)
        let model = await Collection.find()
        res.send(model)
    },
    _ReadOne: async (req, res) => {
        let url = (req.url).replace('/', '');
        let split_query = (url).split('/');
        let url_name = (split_query[0]).toLowerCase();
        let url_id = split_query[1];
        let Collection = require(`../models/${url_name}.model`)
        let model = await Collection.findById(url_id);
        if (model)
            res.send(model)
        else
            res.send(`${url_name} NOT FOUND!`)
    },
    _Update: async (req, res) => {
        let body = req.body;
        body.password = bcrypt.hashSync(body.password, 10);
        body.access_token = bcrypt.hashSync(body.password, 10);

        let url = (req.url).replace('/', '');
        let split_query = (url).split('/');
        let url_name = (split_query[0]).toLowerCase();
        let url_id = split_query[1];
        let Collection = require(`../models/${url_name}.model`)
        let model = await Collection.findByIdAndUpdate(url_id, body, {
            new: true
        });
        if (model)
            res.send(model)
        else
            res.send(`${url_name} NOT FOUND, fail to update`);
    },
    _Delete: async (req, res) => {
        let url = (req.url).replace('/', '');
        let split_query = (url).split('/');
        let url_name = (split_query[0]).toLowerCase();
        let url_id = split_query[1];
        let Collection = require(`../models/${url_name}.model`)
        let model = await Collection.findByIdAndRemove(url_id, {
            new: true
        })
        if (!model) {
            res.send(`Deleted ${url_name} successful!!!`)
        } else
            res.send(`${url_name} NOT FOUND!`)
    }
}
