import React from 'react'
import { Alert } from 'react-bootstrap'

const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className="error">
      {(message &&
    <Alert variant="danger">
      {message}
    </Alert>
      )}
    </div>
  )
}

export default Notification