import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Logon from './pages/logon'
import Register from './pages/logon/register'

export default function Routes() {
  return (
    <BrowserRouter>
      <switch>
        <Route path="/" exact component={Logon}></Route>
        <Route path="/register" component={Register}></Route>
      </switch>
    </BrowserRouter>
  )
}
