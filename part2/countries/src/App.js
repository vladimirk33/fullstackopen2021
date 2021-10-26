import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import Countries from './components/Countries'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
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

  return (
    <div>
      <Filter text="find countries" newSearchingCountry={newSearchingCountry} handleSearchingCountry={handleSearchingCountry} />
      {/*<h3>add a new</h3>
      <PersonForm persons={persons} setPersons={setPersons} />*/}
      <Countries countries={countries} newSearchingCountry={newSearchingCountry} />
    </div>
  );
}

export default App;
