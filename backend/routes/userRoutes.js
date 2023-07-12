const express = require('express')
const router = express.Router()
const { 
    registerUser,
    loginUser,
    getMe
} = require('../controllers/userController')

// when we make a post request to / (in this case /api/user) we'll call our controller function
router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getMe)

module.exports = router