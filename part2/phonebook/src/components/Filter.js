import React from 'react'

const Filter = ({ text, newSearchingName, handleSearchingNameChange }) => {

  return (
    <div>
        {text}
        <input value={newSearchingName} onChange={handleSearchingNameChange}/>
    </div>
  )

}

export default Filter