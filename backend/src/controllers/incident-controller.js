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
    const { page = 1 } = req.query
    const [count] = await connection('incidents').count()

    const incidents = await connection('incidents')
      .join('ongs', 'ong_id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select(
        'incidents.*',
        'ong_id',
        'name',
        'email',
        'whatsapp',
        'city',
        'uf'
      )
    res.header('X-Total-Count', count['count(*)'])

    return res.status(200).json({ incidents })
  },

  async delete(req, res) {
    const { id } = req.body
    const { ong_id } = req.body

    const incidents = await connection('incidents')
      .where('ong_id', ong_id)
      .select(id)

    if (incidents.ong_id != ong_id) return
    res.status(401).send('ERRO, Operation not permited!')

    await connection('incidents').where('id', id).delete()

    return res.status(204).json(incidents)
  },
}
