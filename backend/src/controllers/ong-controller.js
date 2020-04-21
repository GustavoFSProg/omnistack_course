const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
  async create(req, res) {
    const { name, email, whatsapp, city, uf } = req.body
    const id = crypto.randomBytes(4).toString('HEX')

    const data = await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    })

    return res.json({ data })
  },

  async get(req, res) {
    const ongs = await connection('ongs').select('*')
    return res.json(ongs)
  },

  async delete(req, res) {
    const id = req.params.id

    const deletar = await connection('ongs').where('id', id).delete()

    if (deletar) {
      return res.status(301).send({ message: 'ONG excluída com sucesso!' })
    }
    return res.status(401).send({ message: 'ERRO! ONG não excluída!' })
  },
}
