const express = require('express')
const routes = express.Router()
const ongController = require('../src/controllers/ong-controller')
const incidentsController = require('../src/controllers/incident-controller')

routes.post('/ongs', ongController.create)
routes.get('/ongs', ongController.get)
routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.get)
routes.delete('/incidents/:id', incidentsController.delete)

module.exports = routes
