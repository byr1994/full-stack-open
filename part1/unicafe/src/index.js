import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Title = ({title}) => <h1>{title}</h1>

const Button = ({handleClick, name}) => {
  return(
    <button onClick={handleClick}>
      {name}
    </button>
  )
}

const Statistic = ({name, cont}) => <tr><td>{name}</td><td>{cont}</td></tr>

const Statistics = ({good, neutral, bad, allClicks, average, positive}) => {
  return  good === 0 
  ? 
  <p>No feedback given</p> 
  : 
  <div>
    <table>
      <tbody>
          <Statistic name='good' cont={good}/>
          <Statistic name='neutral' cont={neutral}/>
          <Statistic name='bad' cont={bad}/>
          <Statistic name='all' cont={allClicks}/>
          <Statistic name='average' cont={average}/>
          <Statistic name='positive' cont={positive}/>
      </tbody>
    </table>
  </div>
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState(0)
  

  const increaseGood = () => {
    setAll(allClicks+1)
    setGood(good+1)
  }
  const increaseNeutral = () => {
    setAll(allClicks+1)
    setNeutral(neutral+1)
  }
  const increaseBad = () => {
    setAll(allClicks+1)
    setBad(bad+1)
  }

  const average = (good-bad)/allClicks
  const positive = (good*100)/allClicks
    
  return(
    <div>
        <Title title='give feedback' />
        <Button name='good' handleClick={increaseGood}/>
        <Button name='neutral' handleClick={increaseNeutral}/>
        <Button name='bad' handleClick={increaseBad}/>
        <Title title='statistics' />
        <Statistics 
          good={good} 
          neutral={neutral} 
          bad={bad} 
          allClicks={allClicks} 
          average={average} 
          positive={positive} 
        />
    </div>
  )
} 

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
