const { Router } = require('express')

const entryControllers = require('../controllers/entries')

const entryRouter = Router()

entryRouter.get('/', entryControllers.index)
entryRouter.post('/', entryControllers.create)



module.exports = entryRouter
