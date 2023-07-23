const User = require('../models/user')

const signup =  async (req, res) => {
    const {email, password} = req.body
    try {
        User.signup(email, password)
        res.status(201).json({message: 'User created', user: {email: email, password: password}})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

const login = async (req, res) => {
    res.send('login')
}

module.exports = {
    signup,
    login
}