const mongoose = require('mongoose')

const goalSchema = mongoose.Schema({
    user: {
        // when we create a new resource that's an object id
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // which model does the object id pertain to
    },

    text: {
        type: String,
        required: [true, 'Please add a text value']
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Goal', goalSchema)