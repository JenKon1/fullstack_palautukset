import React, { useState } from 'react'
import Person from './components/Person'

const nameAlreadyExists = (persons, name) => {
  return persons.map(p=>p.name).includes(name)
}

const App = (props) => {
  const [persons, setPersons] = useState(props.persons)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addContact = (event) => {
    event.preventDefault()

    if(nameAlreadyExists(persons, newName)){
      alert(`${newName} is already added to phonebook`)
    } else {
      const contactObject = {
        name: newName,
        number: newNumber
      }
    
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>phonebook</h1>
      <form onSubmit={addContact}>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
        <div> number: <input
          value={newNumber}
          onChange={handleNumberChange}
        /> </div>
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