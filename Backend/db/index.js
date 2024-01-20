const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:N6VRzntriNi3n8ip@cluster0.lvs9kpr.mongodb.net/usersdata');

const UserSchema = new mongoose.Schema({
    username : String,
    name : String,
    email: String,
    password: String,
    graduation: Number,
    sid : String,
    branch : String,
    college : String,
    publicName : String

});


const User = mongoose.model('User', UserSchema);

module.exports = {User}
