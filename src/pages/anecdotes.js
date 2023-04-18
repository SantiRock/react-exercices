import { useState } from 'react'

const Button = ({ handleClick, text} ) => (
  <button className='btn' onClick={handleClick}>{text}</button>
)

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({
    0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0
  })

  function getRandomValue() {
    return Math.floor(Math.random()*anecdotes.length)
  }

  const nextAnecdote = () => () => {
    const randomVal = getRandomValue()
    setSelected(randomVal)
  }

  const voteClick = () => () => {
    const newPoints = { ...points }
    newPoints[selected] += 1
    setPoints(newPoints)
    //console.log('Points: ', newPoints)
  }

  const pointsValues = Object.values(points)
  let maxPoints = Math.max(...pointsValues)
  let mostVotes = pointsValues.indexOf(maxPoints)

  return (
    <div className='container1'>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <p>Has {points[selected]} votes</p>
      <Button text='vote' handleClick={voteClick()}/>
      <Button text='next anecdote' handleClick={nextAnecdote()}/>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVotes]}</p>
      <p>Has {points[mostVotes]} votes</p>
    </div>
  );
};
  
export default Anecdotes;