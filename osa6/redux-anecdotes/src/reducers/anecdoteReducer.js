import anecdoteService from '../services/anecdotes'

//Action creator
export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

//Action creator
export const addAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'ADD',
      data: newAnecdote,
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

const reducer = (state = [], action) => {

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVote = state.find(a => a.id === id)

      const votedAnectode = {
        ...anecdoteToVote,
        votes: anecdoteToVote.votes + 1
      }

      return state
        .map(a=>a.id !== id ? a : votedAnectode)
        .sort((a1,a2)=>a2.votes-a1.votes)
    case 'ADD':
      return state.concat(action.data)
    default:
      return state
    case 'INIT_ANECDOTES':
      return action.data
  }
}

export default reducer