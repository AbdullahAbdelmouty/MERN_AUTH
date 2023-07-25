require('dotenv').config()
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user');
const authMiddleware = require('./Middleware/Auth')

// express app
const app = express()
app.use(cors())
// middleware
app.use(express.json())

// routes
app.use('/api/v1/auth', userRoutes)
app.use('/api/v1/workouts',authMiddleware, workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })