import React, { useState } from 'react'
import Data from './Data'

const PersonForm = ({ persons, setPersons }) => {

  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const addPerson = (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      const currPerson = persons.filter(person => person.name === newName)[0]
      if (window.confirm(`${newName} is already added to phonebook, replace old number with a new one?`)) {
        const changedPersonObject = {
          ...currPerson, number: newNumber
        }
        Data
          .update(currPerson.id, changedPersonObject)
          .then(response => {
            setPersons(persons.map(person => person.name !== currPerson.name ? person : response.data))
          })
      }
    } else if (persons.map(person => person.number).includes(newNumber)) {
      window.alert(`Phone number ${newNumber} is already added to phonebook`)
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      Data
        .create(personObject)
        .then(response => {
          setPersons(persons.concat(response.data))
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  return (
    <form onSubmit={addPerson}>
    <div>name: <input value={newName} onChange={handleNameChange}/></div>
    <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
    <div><button type="submit">add</button></div>
    </form>
  )
}

export default PersonForm