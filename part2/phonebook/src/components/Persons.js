import React from 'react'
import Data from './Data'

const Persons = ({ persons, newSearchingName, setPersons }) => {

  const handleDelete = (id, person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      Data
      .remove(person)
      setPersons(persons.filter(person => person.id !== id))
    }
  }

  return (
    <div>
        {newSearchingName === ""
        ? persons.map(person =>
          <div key={person.name}>
            <p>{person.name} {person.number} <button onClick={() => handleDelete(person.id, person)}>delete</button></p>
          </div>
        )
        : persons.filter(person =>
            person.name.toLowerCase().includes(newSearchingName.toLowerCase())
        ).map(person =>
          <div key={person.name}>
            <p>{person.name} {person.number} <button onClick={() => handleDelete(person.id, person)}>delete</button></p>
          </div>
        )
        }
    </div>
  )
}

export default Persons