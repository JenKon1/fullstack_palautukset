import React from 'react'
import { Button } from 'react-bootstrap'

const Blog = ({ blog, onDeleted }) => (
  <div>
    <tbody>
      <td>{blog.title}</td>
      <td>{blog.author}</td>
      <td><Button variant="danger" type="submit" onClick={() => onDeleted(blog)}>
        remove
      </Button></td>
    </tbody>
  </div>
)

export default Blog
