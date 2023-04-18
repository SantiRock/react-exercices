import { useState } from 'react'

const Button = ({ handleClick, text} ) => (
  <button className='btn' onClick={handleClick}>{text}</button>
)

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}: </td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ allClicks, good, neutral, bad, average, positive }) => {
  if (allClicks === 0 ) {
    return (<p>No feedback given</p>)
  } 
  return (
    <table>
      <tbody>
        <StatisticLine text='Good' value={good}/>
        <StatisticLine text='Neutral' value={neutral}/>
        <StatisticLine text='Bad' value={bad}/>
        <StatisticLine text='All' value={allClicks}/>
        <StatisticLine text='Average' value={average}/>
        <StatisticLine text='Positive' value={positive}/>  
      </tbody>
    </table>
  )
}

const Unicafe = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  let average = (good - bad)/allClicks
  let positive = (good/allClicks)*100
  
  const clicksCount = (set, newValue) => () => {
    set(newValue)
    setAll(allClicks + 1)
  } 

  return (
    <div className='container1'>
      <h2>Give Feedback</h2>
      <Button handleClick={clicksCount(setGood, good + 1)} text='good'/>
      <Button handleClick={clicksCount(setNeutral, neutral + 1)} text='neutral'/>
      <Button handleClick={clicksCount(setBad, bad + 1)} text='bad'/>
      <h2>Statistics</h2>
      <Statistics allClicks={allClicks} good={good} neutral={neutral}
      bad={bad} average={average} positive={positive}/>
    </div>
  );
};
  
export default Unicafe;