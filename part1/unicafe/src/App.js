import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all > 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
            <StatisticLine text='good' value={props.good} />
            <StatisticLine text='neutral' value={props.neutral} />
            <StatisticLine text='bad' value={props.bad} />
            <StatisticLine text='all' value={props.all} />
            <StatisticLine text='average' value={props.average} />
            <StatisticLine text='positive' value={`${props.positive}%`} />
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.onclick}>{props.text}</button>
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
      <Button onclick={() => handleClick('good')} text={'good'} />
      <Button onclick={() => handleClick('neutral')} text={'neutral'} />
      <Button onclick={() => handleClick('bad')} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App