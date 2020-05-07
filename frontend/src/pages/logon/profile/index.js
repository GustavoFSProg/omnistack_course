import React, { useEffect, useState } from 'react'
import api, { getIncidentsByOngId } from '../../../services/api'
import Component from './Component'

export default () => {
  const [incidents, setIncidents] = useState([])
  const ongId = localStorage.getItem('ongId')

  const getIncidents = async (ongId) => {
    try {
      const { data } = await getIncidentsByOngId(ongId)
      setIncidents(data)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  }

  useEffect(() => getIncidents(ongId), [ongId])

  return <Component incidents={incidents} />
}
