import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Data from './components/Data'
import './index.css'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ message, setMessage ] = useState(null)
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

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

  const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className={message.class}>
        {message.text}
      </div>
    )
  }

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
            setMessage({
              text: `Updated ${changedPersonObject.name}'s number`,
              class: "success",
            });
            setTimeout(() => setMessage(null), 5000);
          })
          .catch((error) => {
            setPersons(persons.filter((person) => person.name !== changedPersonObject.name));
            setMessage({
              text: `${changedPersonObject.name} has already been deleted from the server`,
              class: "error",
            });
            setTimeout(() => setMessage(null), 5000);
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
          setPersons(persons.concat(response.data));
          setMessage({
            text: `Added ${personObject.name}`,
            class: "success",
          })
          setTimeout(() => setMessage(null), 5000);
        })
        .catch((error) => {
          setMessage({ text: error.response.data.error, class: "error" });
          setTimeout(() => setMessage(null), 5000);
          console.error(error);
        })
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (id, person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      Data
      .remove(person)
      .catch(error => {
        setMessage({ text: `${error.response.data.error}`, class: 'error' })
      })
      setPersons(persons.filter(person => person.id !== id))
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter text="filter shown with " newSearchingName={newSearchingName} handleSearchingNameChange={handleSearchingNameChange} />
      <h3>add a new</h3>
      <PersonForm handleNameChange={handleNameChange} newName={newName} handleNumberChange={handleNumberChange} newNumber={newNumber} addPerson={addPerson}/>
      <h3>Numbers</h3>
      <Persons persons={persons} newSearchingName={newSearchingName} handleDelete={handleDelete}/>
    </div>
  )
}

export default App