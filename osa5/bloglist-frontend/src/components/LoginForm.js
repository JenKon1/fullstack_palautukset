import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'react-bootstrap'

const LoginForm = ({
  handleSubmit,
  handleUsernameChange,
  handlePasswordChange,
  username,
  password
}) => {
  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>

        <Form.Group>
          <Form.Label>username </Form.Label>
          <Form.Control
            type="text"
            name="username"
            id='username'
            value={username}
            onChange={handleUsernameChange}
          />
          <Form.Label>password </Form.Label>
          <Form.Control
            type="password"id='password'
            value={password}
            onChange={handlePasswordChange}
          />
          <Button variant="primary" type="submit" id="login-button">
            login
          </Button>
        </Form.Group>
      </form>
    </div>
  )
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default LoginForm