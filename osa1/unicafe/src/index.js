import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Calc = (props) => {
  const sum = props.good + props.bad + props.neutral
  return (
    <div>
      <p>all {sum}</p>
      <p>average {(props.good*1 + props.neutral*0 + props.bad*(-1))/sum}</p>
      <p>positive {props.good/sum}</p>
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
      <h1>Statistics</h1>
      <div> good {good} </div>
      <div> neutral {neutral} </div>
      <div> bad {bad} </div>
      <Calc good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)