const express = require('express')
const routes = require('../backend/src/routes')

const app = express()

app.use(express.json({}))
app.use(routes)

app.listen(4001)

console.log('API rodando na porta 3000')

module.exports = app
