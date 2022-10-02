import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1) / all
  const positive = good * (100 / all)

  const handleClick = (props) => {
    if (props === 'good') {
      setGood(good + 1)
    }
    if (props === 'neutral') {
      setNeutral(neutral + 1)
    }
    if (props === 'bad') {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => handleClick('good')}>good</button>
      <button onClick={() => handleClick('neutral')}>neutral</button>
      <button onClick={() => handleClick('bad')}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App