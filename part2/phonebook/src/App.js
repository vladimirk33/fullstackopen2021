import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const [ newSearchingName, setNewSearchingName ] = useState('')

  const handleSearchingNameChange = (event) => {
    setNewSearchingName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter text="filter shown with" newSearchingName={newSearchingName} handleSearchingNameChange={handleSearchingNameChange} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} newSearchingName={newSearchingName} />
    </div>
  )
}

export default App