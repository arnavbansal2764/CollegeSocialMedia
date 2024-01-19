const mongoose = require('mongoose');

mongoose.connect('your-mongodb-url');

const UserSchema = new mongoose.Schema({
    username : String,
    name : String,
    email: String,
    password: String,
    graduation: Number,
    sid : String,
    branch : String,
    college : String
});


const User = mongoose.model('User', UserSchema);

module.exports = {User}
