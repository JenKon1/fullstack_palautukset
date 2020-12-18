import React from 'react'

const Person = ({ person }) => {
    return (
      <li>{person.name + " " + person.number}</li>
    )
  }

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

  export default Persons