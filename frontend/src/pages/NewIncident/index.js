import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import logoImage from '../../assets/logo.svg'

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="logo" />

          <h1>Cadastrar novo Caso</h1>
          <p>Faça seu Cadastro e se comunique conosco e dados da sua ONG</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} />
            Voltar para Home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Titulo do caso" />
          <textarea placeholder="Descrição " />
          <input type="text" placeholder="Valor em reais:" />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
