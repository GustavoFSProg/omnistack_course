import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import './style.css'
// eslint-disable-next-line import/no-unresolved
import { FiPower, FiTrash2 } from 'react-icons/fi'
// eslint-disable-next-line import/no-unresolved
import logoImage from '../../../assets/logo.svg'
import api from '../../../services/api'

export default (props) => {
  const ongName = localStorage.getItem('ongName')
  // eslint-disable-next-line no-unused-vars
  const ongId = localStorage.getItem('ongId')

  const { incidents } = props

  // const [incidents, setIncidents] = useState([])
  async function handleDeleteIncident(id) {
    try {
      await api.delete('/incidents/' + id, {
        headers: {
          authorization: ongId,
        },
      })
      // setIncidents(incidents.filter((incident) => incidents.id !== id))

      alert('Incident deletado com sucesso!')
    } catch (error) {
      alert('ERRO do Front!')
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImage} alt="Be the Hero" />
        <span>{`Ben Vinda,${ongName}!`}</span>
        <Link className="button" to="/incident/new">
          Cadastrar novo Caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041" />
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>Descrição</strong>
            <p>{incident.description}</p>
            <strong>Valor:</strong>
            <p>
              {Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(incident.value)}
            </p>

            <button
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
