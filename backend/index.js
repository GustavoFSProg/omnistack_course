const express = require('express')
const routes = require('../backend/src/routes')
const cors = require('cors')
const app = express()

app.use(cors({}))
app.use(express.json({}))
app.use(routes)

port = 3008
app.listen(port)

console.log('API rodando na porta ' + port)

module.exports = app
