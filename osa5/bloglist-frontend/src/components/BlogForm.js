import React, { useState } from 'react'

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
        <div> Title:
          <input
            id='title'
            value={newTitle}
            onChange={({ target }) => setNewTitle(target.value)}/>

        </div>
        <div> Author:
          <input
            id='author'
            value={newAuthor}
            onChange={({ target }) => setNewAuthor(target.value)}/>

        </div>
        <div> URL:
          <input
            id='URL'
            value={newUrl}
            onChange={({ target }) => setNewUrl(target.value)}/>

        </div>
        <button id='save' type="submit">save</button>
      </form>
    </div>
  )
}

export default BlogForm