const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    designation: { type: String, required: false },
    age: { type: String, required: true },
    city: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);