import React from 'react'
// eslint-disable-next-line import/no-unresolved
import { FiPower, FiTrash2 } from 'react-icons/fi'
// eslint-disable-next-line import/no-unresolved
import { Link } from 'react-router-dom'
import logoImage from '../../../assets/logo.svg'

export default (props) => {
  const ongName = localStorage.getItem('ongName')
  const { incidents } = props

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
            <p>{incident.value}</p>

            <button type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
