const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const entryRouter = require('./routers/entires')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/entries', entryRouter)

app.get('/', (req, res) => {
    res.send("Welcome to the Diary API")
})

module.exports = app
