import React, { useState } from 'react'
import './styles.css'
import './global.css'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import HeroesImage from '../../assets/heroes.png'
import logoImage from '../../assets/logo.svg'
import api from '../../services/api'

export default function Logon() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()
    //  const id = '51653cc8'
    try {
      const { data } = await api.post('session', { id })
      localStorage.setItem('ongId', id)
      localStorage.setItem('ongName', data)
      history.push('/profile')
    } catch (error) {
      // eslint-disable-next-line no-alert
      alert('falha no Login')
    }
  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImage} alt="logo" />
        <form onSubmit={handleLogin}>
          <h1>Faça seu Logon</h1>
          <h4>Usa esse aqui: 51653cc8</h4>
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="Sua ID"
          />
          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} />
            Não tenho cadastro
          </Link>
        </form>
      </section>
      <img src={HeroesImage} alt="Heroes" />
    </div>
  )
}
