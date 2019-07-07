const mongoose = require('mongoose');

const AdminRoleSchema = mongoose.Schema({
    key: String,
    name: String,
    description: String,
    no_change: {
        type: Boolean,
        default: false
    },
    permissions: [String]
}, {
        collection: 'admin_roles',
        timestamps: true,
        toJSON: {
            transform: (doc, ret) => {
                delete ret._id;
                delete ret.__v;
                return ret;
            }
        }
    });

module.exports = mongoose.model('AdminRole', AdminRoleSchema);
