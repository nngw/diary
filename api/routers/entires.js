const { Router } = require('express')

const entryControllers = require('../controllers/entries')

const entryRouter = Router()

entryRouter.post('/', entryControllers.create)



module.exports = entryRouter
