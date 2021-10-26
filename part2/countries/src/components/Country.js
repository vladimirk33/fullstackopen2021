import React from 'react'

const Country = ({ country }) => {

    return (
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

}

export default Country