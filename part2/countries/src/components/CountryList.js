import React, { useState } from 'react'
import Country from './Country';

const CountryList = ({ country }) => {

  const [ showFlag, setShow ] = useState(false);

  const handleButtonClick = () => {
    setShow(!showFlag)
  }

  if (showFlag) {
    return (
      <div>
        {country.name.common}{" "}
        <button onClick={handleButtonClick}>{showFlag ? "hide" : "show"}</button>
        <Country country={country} />
      </div>
    )
  }

  return (
    <div>
      {country.name.common}{" "}
      <button onClick={handleButtonClick}>{showFlag ? "hide" : "show"}</button>
    </div>
  )

}

export default CountryList