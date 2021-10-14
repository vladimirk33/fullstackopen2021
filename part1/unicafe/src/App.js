import React, { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * (-1)) / total;
  const positive = `${good * 100 / total} %`;

  if (total > 0) {
    return (
      <div>
        <table>
          <tbody>
            <StatisticLine text="good" value ={good} />
            <StatisticLine text="neutral" value ={neutral} />
            <StatisticLine text="bad" value ={bad} />
            <StatisticLine text="total" value ={total} />
            <StatisticLine text="average" value ={average} />
            <StatisticLine text="positive" value ={positive} />
          </tbody>
        </table>
      </div>
    )
  }
  return <p>No feedback given</p>
}

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleSetGood = () => setGood(good + 1);
  const handleSetNeutral = () => setNeutral(neutral + 1);
  const handleSetBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleSetGood} text="good" />
      <Button handleClick={handleSetNeutral} text="neutral" />
      <Button handleClick={handleSetBad} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App