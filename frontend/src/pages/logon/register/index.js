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

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} /> Não tenho cadastro
          </Link>
        </section>

        <form>
          <input type="text" placeholder="Nome da ONG"></input>
          <input type="email" placeholder="E-mail"></input>
          <input placeholder="Whatsapp"></input>
          <div className="input-group">
            <input type="text" placeholder="Cidade"></input>
            <input type="text" placeholder="UF" width="80"></input>
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  )
}
