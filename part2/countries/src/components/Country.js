import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Country = ({ country }) => {
  
  const [ weather, setWeather ] = useState([])

  useEffect( () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const countryCapital = country.capital
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${countryCapital}`;
    axios
      .get(url)
      .then(response => {
        setWeather(response.data)
      })
  }, [])

  return (
      <div key={country.name.common}>
        <h1 key={country.name.common}>{country.name.common}</h1>
        <p key={country.capital}>capital {country.capital}</p>
        <p key={country.population}>population {country.population}</p>
        <h2>Spoken languages</h2>
        <ul>
          {Object.values(country.languages).map(language =>
            <li key={language}>{language}</li>
          )}
        </ul>
        <img src={Object.values(country.flags)[0]} width="120" alt="country flag"></img>
        <div>
          {weather === undefined || weather.length === 0
          ? "Wait..."
          :
          <div><h2>Weather in {weather.location.name}</h2>
          <p><strong>temperature:</strong> {weather.current.temperature} Celsius</p>
          <img src={weather.current.weather_icons[0]} alt="weather icon"></img>
          <p><strong>wind:</strong> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p></div>}
        </div>
      </div>
  )

}

export default Country