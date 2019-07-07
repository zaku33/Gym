var User = require('../models/user.model');
const bcrypt = require('bcrypt');

// Get all User
exports.getUser = (req, res) => {
  User.find({}, (err, user) => {
    if (err) console.log(err);
    res.send({
      user: user
    })
  }).sort({
    _id: -1
  }) //worked!!
}
// Get Detail User (id)
exports.getUserById = (req, res) => {
  //If your Mongo schema is configured to use Object Id, you query in nodeJS using
  //models.Foo.findById(id) - not _id  
  User.findOne({
    _id: req.params.id
  }, (err, user) => {
    if (err) console.log(err);
    res.send(user) //worked!!
  })
}
// Update User (id)
exports.updateUser = (req, res) => {
  User.findOneAndUpdate({
    _id: req.params.id
  }, req.body, {
    new: true
  }, (err, user) => {
    if (err) return next(err)
    return res.send({
      success: true,
      message: 'Updated successfully!'
    });
  })
}
// Delete User (id)
exports.deleteUser = (req, res) => {
  User.findOneAndDelete({
    _id: req.params.id
  }, (err, user) => {
    if (err) return console.log(err);
    res.send({
      success: true,
      message: 'Deleted successfully!'
    });
  })
}
// Add new User
exports.addUser = (req, res) => {
  if (!req.body.nickname || !req.body.joinDate) {
    return res.status(400).send({
      message: "Failed"
    });
  } else {
    var body = req.body;
    body.password = bcrypt.hashSync(body.password,10)
    body.access_token = bcrypt.hashSync(body.username,10)
    var newUser = new User(body)
    // var Name = req.body.Name;
    // var Birthday = req.body.Birthday;
    // var Email = req.body.Email;
    // var JoinDate = req.body.JoinDate;
    // var new_user = new User({
    //   Name: Name,
    //   Birthday: Birthday,
    //   Email:Email,
    //   JoinDate:JoinDate
    // })
    newUser.save((err) => { // (error) => {} === function(error) {}
      if (err) return res.status(400).send(err)
      return res.send({success: true,message: 'User saved successfully!'})
    })
  }
}