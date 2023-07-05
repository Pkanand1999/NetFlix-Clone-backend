const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true
    },
    subscription: {
        type: String,
    }
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;