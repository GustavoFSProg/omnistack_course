const connection = require('../database/connection')

module.exports = {
  async post(req, res) {
    const { id } = req.body

    const ong = await connection('ongs').where('id', id).select('name').first()

    if (!ong) {
      return res.status(401).send('ERRO ong não encontrada')
    } else {
      return res.send({ message: ong })
    }
  },
}
