const User = require('../models/user')

const signup =  async (req, res) => {
    res.send('signup')
}

const login = async (req, res) => {
    res.send('login')
}

module.exports = {
    signup,
    login
}