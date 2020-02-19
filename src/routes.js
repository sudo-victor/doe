const routes = require('express').Router()

const indexController = require('./controllers/indexController')

routes.get("/", indexController.index)
routes.post("/", indexController.create)

module.exports = routes