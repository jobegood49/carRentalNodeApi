const User = require('../models/user')

module.exports = {
    index: async (req, res, next) => {
        const users = await User.find({})
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
    },
    getUser: async (req, res, next) => {
        const { userId } = req.params
        const user = await User.findById(userId)
        res.status(200).json(user)

    },
    replaceUser: async (req, res, next) => {
        const { userId } = req.params
        const newUser = req.body
        const result = await User.findByIdAndUpdate(userId, newUser)
        res.status(200).json({ success: true })
    },
    updateUser: async (req, user, next) => {
        const { userId } = req.params
        const newUser = req.body
        const result = await User.findByIdAndUpdate(userId, newUser)
        res.status(200).json({ success: true })

    }
}