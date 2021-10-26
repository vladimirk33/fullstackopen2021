import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Data from './components/Data'

const App = () => {
  const [ persons, setPersons ] = useState([])

  useEffect(() => {
      Data
        .getAll()
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
      <Filter text="filter shown with " newSearchingName={newSearchingName} handleSearchingNameChange={handleSearchingNameChange} />
      <h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />
      <h3>Numbers</h3>
      <Persons persons={persons} newSearchingName={newSearchingName} setPersons={setPersons}/>
    </div>
  )
}

export default App