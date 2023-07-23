const User = require('../models/user')

const signup =  async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)
        res.status(201).json({message: 'User created', user})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const login = async (req, res) => {
    res.send('login')
}

module.exports = {
    signup,
    login
}