import React from 'react'
import './styles.css'
import './global.css'
import HeroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="logo"></img>
        <form>
          <h1>Faça seu Logon</h1>
          <input type="text" placeholder="Sua ID"></input>
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} /> Não tenho cadastro
          </Link>
        </form>{' '}
      </section>
      <img src={HeroesImage} alt="Heroes"></img>
    </div>
  )
}
