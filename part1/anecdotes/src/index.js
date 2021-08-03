import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({next,name}) => <button onClick={next}>{name}</button>

const Message = ({title}) => <h1>{title}</h1>

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [voted, setVoted] = useState([...points])


  const getRandomInt = (min,max) => Math.floor(Math.random() * (max - min)) + min

  const nextClick = () => {
    setSelected(getRandomInt(0,6))
  }

  const voteClick = () => {
    const arr = [...voted]
    arr[selected] += 1
    setVoted(arr)
  }

  return (
    <div>
      <Message title='Anecdote of the day' />
      {anecdotes[selected]}
      <br/>
       has {voted[selected]} votes
      <br/>
      <Button next={voteClick} name='vote' />
      <Button next={nextClick} name='next anecdotes' />
      <Message title='Anecdote with most votes' />
      {anecdotes[voted.indexOf(Math.max(...voted))]}
      <br/>
       has {Math.max(...voted)} votes
    </div>
  )
}

const points = [0, 1, 2, 3, 4, 5]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} points={points}/>,
  document.getElementById('root')
)