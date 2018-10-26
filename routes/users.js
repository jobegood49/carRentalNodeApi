const express = require('express')
const router = express.Router()
const UsersController = require('../controllers/users')


router.route('/')
    .get(UsersController.index)
    .post(UsersController.newUser)

module.exports = router
