import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

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