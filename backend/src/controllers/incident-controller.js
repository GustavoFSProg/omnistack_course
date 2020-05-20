const connection = require('../database/connection')

module.exports = {
  async create(req, res) {
    const { title, description, value, ong_id } = req.body

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    })

    return res.json({ id })
  },

  async get(req, res) {
    try {
      const data = await connection('incidents')
        .join('ongs', 'incidents.ong_id', '=', 'ongs.id')
        .select(
          'incidents.title',
          'incidents.value',
          'incidents.description',
          'ongs.name AS ong_name'
        )

      return res.status(200).send(data)
    } catch (error) {
      return res.status(400).send({ error })
    }
  },

  async getById(req, res) {
    const ong_id = req.headers.authorization

    const incidents = await connection('incidents')
      .select('*')
      .where('ong_id', ong_id)
    // .first()
    return res.status(200).send(incidents)
  },

  async getByIncident(req, res) {
    const id = req.params.id

    const incidents = await connection('incidents')
      .where('id', id)
      .select('*')
      .first()
    return res.status(200).send(incidents)
  },

  async delete(req, res) {
    try {
      const { id } = req.params
      const ong_id = req.headers.authorization

      console.log(id)
      console.log(ong_id)

      const incidents = await connection('incidents')
        .where('id', id)
        .select('ong_id')
        .first()
      console.log(incidents)

      // if (incidents.ong_id != ong_id) return
      // res.status(401).send('ERRO, Operation not permited!')

      if (await connection('incidents').where('id', id).delete()) {
        return res.status(204).json('Incident deletado com sucesso!')
      }
    } catch (error) {
      return res.status(400).send('ERROS ao deletar do back!!')
    }
  },
}
