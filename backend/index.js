const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

const port = 2000;
app.listen(port);

console.log("API rodando na porta " + port);

module.exports = app;
