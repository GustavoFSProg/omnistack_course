import React from 'react'
import '../NewIncident/style.css'
import logoImage from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

export default function NewIncident() {
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImage} alt="logo" />

          <h1>Cadastrar novo Caso</h1>
          <p>Faça seu Cadastro e se comunique conosco e dados da sua ONG</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} /> Voltar para Home
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Titulo do caso"></input>
          <textarea placeholder="Descrição "></textarea>
          <input type="text" placeholder="Valor em reais:"></input>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
