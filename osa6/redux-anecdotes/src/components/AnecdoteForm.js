import React from 'react'
import { useDispatch } from 'react-redux'
import { NewNotification, clearNotification } from '../reducers/notificationReducer'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()

  const handleAddAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
    dispatch(NewNotification(`you added ${content}`))
    setTimeout(() => dispatch(clearNotification()),5000)
  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={handleAddAnecdote}>
        <div><input name='anecdote' /></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm