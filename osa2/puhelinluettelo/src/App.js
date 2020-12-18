import React, { useState, useEffect } from 'react'
import personService from './services/persons'
import Persons from './components/Persons'
import ContactForm from './components/ContactForm'
import Filter from './components/Filter'

const nameAlreadyExists = (persons, name) => {
  return persons.map(p=>p.name).includes(name)
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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

      personService
      .create(contactObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
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