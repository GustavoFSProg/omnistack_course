import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logon from './pages/logon'
import Register from './pages/logon/register'
import Profile from './pages/logon/profile'

export default function Routes() {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/" exact component={Logon}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/profile" component={Profile}></Route>
      </switch>
    </BrowserRouter>
  )
}
