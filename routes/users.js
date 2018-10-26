// const express = require('express')
// const router = express.Router()
const router = require('express-promise-router')();

const UsersController = require('../controllers/users')


router.route('/')
    .get(UsersController.index)
    .post(UsersController.newUser)

router.route('/:userId')
    .get(UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser)

module.exports = router
