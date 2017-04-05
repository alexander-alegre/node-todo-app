const mongoose = require('mongoose');

// user model
var User = mongoose.model('User', {
    user: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});


module.exports = {
    User
};