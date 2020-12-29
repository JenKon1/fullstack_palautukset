import React from 'react'
const Blog = ({ blog, onDeleted }) => (
  <div>
    {blog.title} {blog.author}
    <button onClick={() => onDeleted(blog)}>remove</button>
  </div>
)

export default Blog
