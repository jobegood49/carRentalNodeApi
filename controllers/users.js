const User = require('../models/user')

module.exports = {
    index: async (req, res, next) => {
            const users = await User.find({})
            throw new Error('dummy error')
            res.status(200).json(users)
     
    },
    newUser: async (req, res, next) => {
        try {
            const newUser = new User(req.body)
            const user = await newUser.save()
            res.status(201).json(user)
        } catch (err) {
            next(err)

        }
    }
}