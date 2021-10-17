import React from 'react'

const Persons = ({ persons, newSearchingName }) => {

  return (
    <div>
        {newSearchingName === ""
        ? persons.map(person =>
            <p key={person.name}>{person.name} {person.number}</p>
        )
        : persons.filter(person =>
            person.name.toLowerCase().includes(newSearchingName.toLowerCase())
        ).map(person =>
            <p key={person.name}>{person.name} {person.number}</p>
        )
        }
    </div>
  )
}

export default Persons