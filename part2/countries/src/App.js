import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountryList from './components/CountryList'
import Country from './components/Country'

function App() {

  const [ countries, setCountries ] = useState([])

  useEffect( () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const [ newSearchingCountry, setNewSearchingCountry ] = useState('')

  const handleSearchingCountry = (event) => {
    setNewSearchingCountry(event.target.value)
  }

  const countriesToShow =
    newSearchingCountry === ""
      ? []
      : countries.filter(country =>
          country.name.common.toLowerCase().includes(newSearchingCountry.toLowerCase())
        )

  if (countriesToShow.length === 1) {
    return (
      <div>
        find countries <input onChange={handleSearchingCountry} />
        <div>
          <Country country={countriesToShow[0]}/>
        </div>
      </div>
    )
  }

  return (
    <div>
      find countries <input onChange={handleSearchingCountry} />
      <div>
        {countriesToShow.length > 10
          ? "Too many matches, specify another filter"
          : countriesToShow.map(country => (
            <div key={country.name.common}>
              <CountryList country={country} />
            </div>
          ))}
      </div>
    </div>
  )

}

export default App;
