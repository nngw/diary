const { Router } = require('express')

const entryControllers = require('../controllers/entries')

const entryRouter = Router()

entryRouter.get('/', entryControllers.index)
entryRouter.get("/:id", entryControllers.show)
entryRouter.get('/date/:year',entryControllers.showYear)
entryRouter.get('/category/:category',entryControllers.showByCategory)
entryRouter.post('/', entryControllers.create)



module.exports = entryRouter
