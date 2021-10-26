import React from 'react'

const Filter = ({ text, newSearchingCountry, handleSearchingCountry }) => {

  return (
    <div>
        {text + " "}
        <input value={newSearchingCountry} onChange={handleSearchingCountry}/>
    </div>
  )

}

export default Filter