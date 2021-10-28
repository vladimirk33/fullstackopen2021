import React from 'react'

const Persons = ({ persons, newSearchingName, handleDelete }) => {

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