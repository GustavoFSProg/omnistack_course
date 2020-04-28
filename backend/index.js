<<<<<<< Updated upstream
const express = require('express')
const routes = require('../backend/src/routes')

const app = express()

app.use(express.json({}))
app.use(routes)

app.listen(4001)

console.log('API rodando na porta 3000')
=======
const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
>>>>>>> Stashed changes

const port = 4000;
app.listen(port);

console.log("API rodando na porta " + port);

module.exports = app;
