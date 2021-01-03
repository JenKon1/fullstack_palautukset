import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const BlogForm = ({ createBlog }) => {
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newUrl, setNewUrl] = useState('')

  const addBlog = (event) => {
    event.preventDefault()
    createBlog({
      title: newTitle,
      author: newAuthor,
      url: newUrl,

    })
    setNewTitle('')
    setNewAuthor('')
    setNewUrl('')
  }

  return (
    <div>
      <h2>Add new blog</h2>

      <form onSubmit={addBlog}>
        <Form.Group>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            name="title"
            id='title'
            value={newTitle}
            onChange={({ target }) => setNewTitle(target.value)}
          />

          <Form.Label>Author:</Form.Label>
          <Form.Control
            name="author"
            id='author'
            value={newAuthor}
            onChange={({ target }) => setNewAuthor(target.value)}
          />

          <Form.Label>URL:</Form.Label>
          <Form.Control
            name="url"
            id='URL'
            value={newUrl}
            onChange={({ target }) => setNewUrl(target.value)}
          />
          <Button variant="outline-primary" type="submit" id='save'>
            save
          </Button>
        </Form.Group>
      </form>
    </div>
  )
}

export default BlogForm