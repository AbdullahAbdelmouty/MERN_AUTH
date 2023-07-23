const User = require('../models/user')
const jwt = require('jsonwebtoken')
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.JWT_SECRET, {expiresIn: 60 * 60 * 24})
}
const signup =  async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        res.status(201).json({message: 'User created', token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const login = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({message: 'User logged in', token})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    signup,
    login
}