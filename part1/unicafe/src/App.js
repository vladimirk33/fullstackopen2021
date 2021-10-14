import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Text = ({ good, neutral, bad }) => (
  <p>
    good {good}<br></br>
    neutral {neutral}<br></br>
    bad {bad}<br></br>
    all {good + neutral + bad}<br></br>
    average {(good * 1 + neutral * 0 + bad * (-1)) / (good + neutral + bad)}<br></br>
    positive {(good) * 100 / (good + neutral + bad)} %
  </p>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Text good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App