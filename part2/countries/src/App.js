import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Country from './components/Country'
import Countries from './components/Countries'
import Form from './components/Form'

const App = () => {

  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const handleCountryChange = (e) => {
    // console.log(e.target.value)
    setCountry(e.target.value)
  }

  const handleSelectClick = (e) => {
    e.preventDefault();
    setCountry(e.target.value)
  }

  const countriesToShow =  countries.filter(p => p.name.toLowerCase().indexOf(country.toLowerCase()) >= 0) 

  let valor
  if(countriesToShow.length > 10){
    valor = <p>Too many matches, specify another filter</p>
  }else if(countriesToShow.length <= 10 & countriesToShow.length > 1){
    valor = <Countries countriesToShow={countriesToShow} handleSelectClick={handleSelectClick} />
  }else  if(countriesToShow.length === 1){
    valor = <Country country={countriesToShow} />
  }else{
    valor = <p>without results</p>
  }

  return (
    <div>
      <Form country={country} handleCountryChange={handleCountryChange}/>
      {valor}
    </div>
  )
}

export default App;
