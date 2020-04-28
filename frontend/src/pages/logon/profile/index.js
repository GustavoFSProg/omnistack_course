import React, { useEffect, useState } from 'react'
import './style.css'
import logoImg from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../../services/api'

export default function Profile() {
  const ongName = localStorage.getItem('ongName')
  const ong_id = localStorage.getItem('ongId')
  const [incidents, setIncidents] = useState([])

  const getIncidents = async (ong_id) => {
    try {
      const { data } = await api.get('profile', {
       data:
       { ong_id: ong_id },

        headers: {
          authorization: ong_id,
        },
      })
      setIncidents(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getIncidents(ong_id)
  }, [ong_id])

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"></img>
        <span>Ben Vinda, {ongName} !</span>
        <Link className="button" to="/incident/new">
          Cadastrar novo Caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041"></FiPower>
        </button>
      </header>

      <h1>Casos Cadastrados</h1>
      {console.log('foraa')}
      <ul>
        {incidents.map((incident) => (
          <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>Descrição</strong>
            <p>{incident.description}</p>
            <strong>Valor:</strong>
            <p>{incident.value}</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
