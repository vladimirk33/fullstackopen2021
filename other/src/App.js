import React from 'react'

const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>
        )}
    </div>
  )
}

export default App