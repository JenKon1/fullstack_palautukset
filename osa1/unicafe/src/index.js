import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  const sum = props.good + props.bad + props.neutral
  return (
    <div>
      <h1>Statistics</h1>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {sum}</div>
      <div>average {(props.good*1 + props.neutral*0 + props.bad*(-1))/sum}</div>
      <div>positive {props.good/sum}</div>
    </div>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
   
  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      
      <Statistics good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)