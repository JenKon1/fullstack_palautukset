import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const randomizer = (items) => (
  Math.floor(Math.random() * items.length)
)
  
const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>{text}</button>
)

const AnecdoteDisplay = ({anecdote, votes}) => (
  <p> {anecdote} has { votes} votes</p>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
  const [anecdote1, setAnecdote1] = useState(selected)

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    
    if (copy[selected]>copy[anecdote1]) {
      setAnecdote1(selected)
    }
  }

  return (
    <div>
      <AnecdoteDisplay anecdote={props.anecdotes[selected]} votes={votes[selected]}/>
      <Button text="next anecdote" handleClick={() => setSelected(randomizer(props.anecdotes))}/>
      <button onClick={handleVote}>vote</button>
      <h1>Anecdote with most votes</h1>
      <AnecdoteDisplay anecdote={props.anecdotes[anecdote1]} votes={votes[anecdote1]}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)