const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    const { title, description, value } = req.body
    const ong_id = req.headers.authorization

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    })

    return res.json({ id })
  },

  async get(req, res) {
    const incidents = await connection('incidents').select('*')

    return res.status(200).json({ incidents })
  },

  async delete(req, res) {
    const { id } = req.params
    const ong_id = req.headers.authorization

    const incidents = await connection('incidents')
      .select('id', id)
      .where('ong_id')
      .first()

    if (incidents.ong_id != ong_id) return
    res.status(401).send('ERRO, Operation not permited!')

    await connection('incidents').where('id', id).delete()

    return res.status(204).json({ message: 'Incidents deletado com sucesso!' })
  },
}
