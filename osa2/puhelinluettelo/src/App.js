import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'

const nameAlreadyExists = (persons, name) => {
  return persons.map(p=>p.name).includes(name)
}

const Filter = ({filter, onFilterChange}) => {
  return (
    <p> filter shown with <input value={filter} onChange={onFilterChange}/></p>
  )
}

const ContactForm = (props) => (
  <form onSubmit={props.addContact}>
  name: <input
    value={props.newName}
    onChange={props.handleNameChange}
  />
  <div> number: <input
    value={props.newNumber}
    onChange={props.handleNumberChange}
  /> </div>
  <button type="submit">add</button>
</form>
)

const Persons = ({persons, filter}) => {
  const caseinsensitiveFilter = (person) => (
    person.name.toUpperCase().includes(
      filter.toUpperCase()
    )
  )
  return (
    <ul>
      {persons
        .filter(caseinsensitiveFilter)
        .map(person => <Person key={person.name} person={person} />)}
    </ul>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])

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

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange}/>
      
      <h1>Add new contact</h1>
      <ContactForm
        addContact={addContact}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        newName={newName}
        newNumber={newNumber}
      />
      <h1>Numbers</h1>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App 