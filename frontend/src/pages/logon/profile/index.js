import React from 'react'
import './style.css'
import logoImg from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the Hero"></img>
        <span>Ben Vinda, ,APAD!</span>
        <Link className="button" to="/incidents/new">
          Cadastrar novo Caso
        </Link>
        <button type="button">
          <FiPower size={18} color="#E02041"></FiPower>
        </button>
      </header>

      <h1>Casos Cadastrados</h1>

      <ul>
        <li>
          <strong>CASO:</strong>
          <p>Caso 1</p>
          <strong>Descrição</strong>
          <p>Descrição teste</p>
          <strong>Valor:</strong>
          <p>R$ 120,00 </p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso 1</p>
          <strong>Descrição</strong>
          <p>Descrição teste</p>
          <strong>Valor:</strong>
          <p>R$ 120,00 </p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso 1</p>
          <strong>Descrição</strong>
          <p>Descrição teste</p>
          <strong>Valor:</strong>
          <p>R$ 120,00 </p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
        <li>
          <strong>CASO:</strong>
          <p>Caso 1</p>
          <strong>Descrição</strong>
          <p>Descrição teste</p>
          <strong>Valor:</strong>
          <p>R$ 120,00 </p>

          <button type="button">
            <FiTrash2 size={20} color="#a8a8b3"></FiTrash2>
          </button>
        </li>
      </ul>
    </div>
  )
}
