import React from 'react'

const Person = ({ person, deletion }) => {
    return (
      <li>{person.name + " " + person.number} <button onClick={() => deletion(person)}>delete</button></li>
    )
  }

const Persons = ({persons, filter, deletion}) => {
    const caseinsensitiveFilter = (person) => (
      person.name.toUpperCase().includes(
        filter.toUpperCase()
      )
    )
    return (
      <ul>
        {persons
          .filter(caseinsensitiveFilter)
          .map(person => <Person key={person.name} person={person} deletion={deletion} />)}
      </ul>
    )
  }

  export default Persons