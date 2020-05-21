const express = require('express')
const routes = express.Router()
const ongController = require('../src/controllers/ong-controller')
const incidentsController = require('../src/controllers/incident-controller')
const profileController = require('../src/controllers/profile-controller')
const sessionController = require('../src/controllers/session-controller')

routes.post('/ongs', ongController.create)
routes.get('/ongs', ongController.get)
routes.post('/incidents', incidentsController.create)
routes.get('/incidents/all', incidentsController.index)
routes.get('/incidents', incidentsController.get)
routes.get('/incidents', incidentsController.getById)
routes.get('/inc/:id', incidentsController.getByIncident)
routes.delete('/incidents/:id', incidentsController.delete)

routes.get('/profile/:id', profileController.getIncidentsByOngId)

routes.post('/session', sessionController.post)

module.exports = routes
