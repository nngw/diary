const { Router } = require('express')

const entryControllers = require('../controllers/entries')

const entryRouter = Router()

entryRouter.get('/', entryControllers.index)
entryRouter.get("/:id", entryControllers.show)
entryRouter.get('/date/:year',entryControllers.showYear)
// entryRouter.get('/date/:date',entryControllers.showDate)
entryRouter.post('/', entryControllers.create)



module.exports = entryRouter
