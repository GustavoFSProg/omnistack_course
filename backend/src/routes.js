const express = require('express')
const routes = express.Router()
const ongController = require('../src/controllers/ong-controller')
const incidentsController = require('../src/controllers/incident-controller')
const profileController = require('../src/controllers/profile-controller')
const sessionController = require('../src/controllers/session-controller')

routes.post('/ongs', ongController.create)
routes.get('/ongs', ongController.get)
routes.delete('/ongs/:id', ongController.delete)

routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.get)
routes.delete('/incidents', incidentsController.delete)

routes.get('/profile', profileController.index)

routes.post('/session', sessionController.post)

module.exports = routes
