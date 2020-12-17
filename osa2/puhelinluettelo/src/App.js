import React, { useState } from 'react'
import Person from './components/Person'

const App = (props) => {
  const [persons, setPersons] = useState(props.names)
  const [newName, setNewName] = useState('') 

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h1>phonebook</h1>
      <form onSubmit={addName}>
        <input
          value={newName}
          onChange={handleNoteChange}
        />
        <button type="submit">add</button>
      </form>
      <h1>Numbers</h1>
      <ul>
        {persons.map((person, i) => 
          <Person key={i} person={person} />
        )}
      </ul>
    </div>
  )
}

export default App 