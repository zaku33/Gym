const Admin = require('../models/admin.model')
const AdminRole = require('../models/roles.model')
const _ = require('lodash');
const bcrypt = require('bcrypt');
const {
    _extend
} = require('util');


const admin = [{
    nickname: 'Nguyễn Hoàng Vương',
    username: 'zaku33',
    password: bcrypt.hashSync('3108vuong', 10),
    access_token: bcrypt.hashSync('nguyenhoangvuong44@gmail.com', 10),
    email: 'nguyenhoangvuong44@gmail.com',
    phone: '0981875373',
    address: '217 Liêu Bình Hương , ấp Tân Thành , xã Tân Thông Hội , huyện Củ Chi , thành phố HCM',
    no_change: true
}, {
    nickname: 'Nguyễn Hoàng Long',
    username: 'seocualong',
    password: bcrypt.hashSync('3112long', 10),
    access_token: bcrypt.hashSync('seocualong@gmail.com', 10),
    email: 'seocualong@gmail.com',
    phone: '096704406',
    address: '217 Liêu Bình Hương , ấp Tân Thành , xã Tân Thông Hội , huyện Củ Chi , thành phố HCM',
    no_change: true
}, {
    nickname: 'Nguyễn Đắc Lợi',
    username: 'nguyendacloi',
    password: bcrypt.hashSync('20031959loi', 10),
    access_token: bcrypt.hashSync('nguyendacloi@gmail.com', 10),
    email: 'nguyendacloi@gmail.com',
    phone: '01695547765',
    address: '217 Liêu Bình Hương , ấp Tân Thành , xã Tân Thông Hội , huyện Củ Chi , thành phố HCM',
    no_change: true
}, {
    nickname: 'Lâm Thị Thu An',
    username: 'lamthithuan',
    password: bcrypt.hashSync('14071964an', 10),
    access_token: bcrypt.hashSync('lamthithuan@gmail.com', 10),
    email: 'lamthithuan@gmail.com',
    phone: '01668824377',
    address: '217 Liêu Bình Hương , ấp Tân Thành , xã Tân Thông Hội , huyện Củ Chi , thành phố HCM',
    no_change: true
}]
const roleDefault = {
    no_change:true,
    permissions:[

        'CREATE_USER',
        'READ_USER',
        'UPDATE_USER',
        'DELETE_USER',
        'IMPORT_USER',

        'CREATE_NEWS',
        'READ_NEWS',
        'UPDATE_NEWS',
        'DELETE_NEWS',
        'IMPORT_NEWS',

        'CREATE_ROLE',
        'READ_ROLE',
        'UPDATE_ROLE',
        'DELETE_ROLE',

        'CREATE_ADMIN',
        'READ_ADMIN',
        'UPDATE_ADMIN',
        
        'CREATE_PRODUCT',
        'READ_PRODUCT',
        'UPDATE_PRODUCT',
        'DELETE_PRODUCT',
        'IMPORT_PRODUCT',


    ]
}

Admin.countDocuments(async (err,cnt)=>{
    if(cnt <1){
        let role = await AdminRole.findOne({ key: 'master' });
        if (!role) role = await (new AdminRole(roleDefault)).save();

        _.each(admin, item => {
            let data = _extend({}, item);
            Admin.init().then(() => {
                const admin = new Admin({
                    ...data,
                    roles: [role._id]
                });
                const err = admin.validateSync();
                if (!err) {
                    admin.save().then(data => null);
                }
            });
        });
    }
})