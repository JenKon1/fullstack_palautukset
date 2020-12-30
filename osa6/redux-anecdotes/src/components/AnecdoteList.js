import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'
import { clearNotification, NewNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    /*
    Tämän avulla pääsee käsiksi lisättyihin anekdootteihin
    */
   const anecdotes = useSelector(state => {
    return state.anecdotes.filter(anecdote =>
        anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
   })
   /*
   tarjoaa pääsyn redux-storen dispatch-funktioon,
   jonka avulla komponentti pääsee tekemään muutoksia redux-storen tilaan.
   */
  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    dispatch(voteAnecdote(anecdote.id))
    dispatch(NewNotification(`you voted "${anecdote.content}"`))
    setTimeout(() => dispatch(clearNotification()),5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList