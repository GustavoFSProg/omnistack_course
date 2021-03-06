import React, { useEffect, useState } from 'react'
import { getIncidentsByOngId, api } from '../../../services/api'
import Component from './Component'

export default () => {
  const [incidents, setIncidents] = useState([])
  const id = localStorage.getItem('ongId')

  const getIncidents = async (ongId) => {
    try {
      const { data } = await getIncidentsByOngId(ongId)
      setIncidents(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  useEffect(() => getIncidents(id), [id])

  return <Component incidents={incidents} />
}
