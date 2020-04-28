const express = require('express')
const routes = express.Router()
const ongController = require('../src/controllers/ong-controller')
const incidentsController = require('../src/controllers/incident-controller')

routes.post('/ongs', ongController.create)
routes.get('/ongs', ongController.get)
routes.post('/incidents', incidentsController.create)
routes.get('/incidents', incidentsController.get)
<<<<<<< Updated upstream
routes.delete('/incidents/:id', incidentsController.delete)
=======
routes.delete('/incidents', incidentsController.delete)

routes.get('/profile/:id', profileController.getIncidentsByOngId)

routes.post('/session', sessionController.post)
>>>>>>> Stashed changes

module.exports = routes
