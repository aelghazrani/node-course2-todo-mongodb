var mongoose = require('mongoose');
var User = mongoose.model('User', {
    email:{
        type: String,
        required: true,
        minlength: 10,
        trim: true
    }
});
module.exports = {User};