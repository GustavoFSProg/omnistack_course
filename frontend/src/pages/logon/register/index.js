import React from 'react'
import './style.css'
import logoImage from '../../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="logo" />

          <h1>Cadastro</h1>
          <p>Faça seu Cadastro e se comunique conosco e dados da sua ONG</p>

          <Link className="back-link" to="/register">
            <FiArrowLeft size={16} /> Não tenho cadastro
          </Link>
        </section>
      </div>
    </div>
  )
}
