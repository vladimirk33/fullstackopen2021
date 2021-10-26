import React from 'react'

const Persons = ({ countries, newSearchingCountry }) => {

  return (
    <div>
        {newSearchingCountry === ""
        ? ""
        : countries.filter(country =>
          country.name.common.toLowerCase().includes(newSearchingCountry.toLowerCase())).length <= 10
        ? countries.filter(country =>
          country.name.common.toLowerCase().includes(newSearchingCountry.toLowerCase())).length === 1
        ?
        countries.filter(country =>
          country.name.common.toLowerCase().includes(newSearchingCountry.toLowerCase())
        ).map(country =>
          <div key={country.name.common}>
            <h1 key={country.name.common}>{country.name.common}</h1>
            <p key={country.capital}>capital {country.capital}</p>
            <p key={country.population}>population {country.population}</p>
            <h2>languages</h2>
            <ul>
              {Object.values(country.languages).map(language =>
                <li key={language}>{language}</li>
              )}
            </ul>
            <img src={Object.values(country.flags)[0]} width="120" alt="country flag"></img>
          </div>
        )
        :
        countries.filter(country =>
            country.name.common.toLowerCase().includes(newSearchingCountry.toLowerCase())
        ).map(country =>
            <p key={country.name.common}>{country.name.common}</p>
        )
        : <p>Too many matches, specify another filter</p>
        }

        {/*newSearchingName === ""
        ? persons.map(person =>
            <p key={person.name}>{person.name} {person.number}</p>
        )
        : persons.filter(person =>
            person.name.toLowerCase().includes(newSearchingName.toLowerCase())
        ).map(person =>
            <p key={person.name}>{person.name} {person.number}</p>
        )*/}
    </div>
  )
}

export default Persons