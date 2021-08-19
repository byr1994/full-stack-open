import React, { useEffect, useState } from 'react'
import axios from 'axios'

const api_key = process.env.REACT_APP_API_KEY

const Country = ({country}) => {
    const [weather, setWeather] = useState('')

    const countryStyle = {
        height: 120,
        width: 150,
        marginTop: '10px'
    }

    const weatherStyle = {
        height: 60,
        width: 75,
        marginTop: '10px'
    }

    useEffect(() => {
        axios
        .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country[0].capital}`)
          .then(response => {
            // console.log(response.data.current)
            setWeather(response.data.current)
          })
    }, [country])

    return (
      <div>
        <h1>{country[0].name}</h1>
        <p>capital {country[0].capital}</p>
        <p>population {country[0].population}</p>
        <h2>languages</h2>
        {country[0].languages.map(data => <li key={data.name}>{data.name}</li>)}
        <img src={country[0].flag} alt='flag' style={countryStyle} />
        <h2>Weather in Helsinki</h2>
        <p><strong>temperature:</strong> {weather.temperature}° celsius</p>
        <img src={weather.weather_icons} alt='flag' style={weatherStyle} />
        <p><strong>wind:</strong> {weather.wind_degree} mph direction {weather.wind_dir}</p>
      </div>
    )
  }

  export default Country
