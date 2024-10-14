const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        maxLength: 50,
        trim: true
    },
    password: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('users',UserSchema)