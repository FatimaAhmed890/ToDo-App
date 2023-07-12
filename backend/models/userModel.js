// Put schema for the user to have

const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    // passing in the fields
    name: {
        type: String,
        required: [true, 'Please add a name']
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    }
},
{
    //gives us a created & updated at field
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)