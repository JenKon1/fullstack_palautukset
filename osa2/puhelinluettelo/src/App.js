import React, { useState } from 'react'
import Person from './components/Person'

const nameAlreadyExists = (persons, name) => {
  return persons.map(p=>p.name).includes(name)
}

const App = (props) => {
  const [persons, setPersons] = useState(props.names)
  const [newName, setNewName] = useState('') 

  const addName = (event) => {
    event.preventDefault()

    if(nameAlreadyExists(persons, newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      const nameObject = {
        name: newName,
      }
    
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h1>phonebook</h1>
      <form onSubmit={addName}>
        <input
          value={newName}
          onChange={handleNameChange}
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