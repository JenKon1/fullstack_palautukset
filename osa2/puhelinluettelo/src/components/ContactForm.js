import React from 'react'

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

  export default ContactForm