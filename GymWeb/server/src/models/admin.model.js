const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var AdminSchema = new Schema({
    nickname: String,
    username: String,
    password: String,
    access_token: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    phone: String,
    address: String,
    roles: [{
        type: Schema.Types.ObjectId,
        ref: 'AdminRole'
    }],
    no_change: {
        type: Boolean,
        default: false
    },
    etc: {}
}, {
    toJSON: {
        transform: (doc, ret, options) => {
            if (options.login) {
                return {
                    access_token: ret.access_token,
                    roles: ret.roles
                };
            }
            if (options.list) {
                delete ret.access_token;
            }
            delete ret.password;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
})

module.exports = mongoose.model('Admin', AdminSchema);