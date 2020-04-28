const connection = require("../database/connection");

module.exports = {
  async getIncidentsByOngId(req, res) {
    const { id } = req.params;

    const data = await connection("incidents").where("ong_id", id).select("*");

    return res.status(200).send(data);
  },
};
