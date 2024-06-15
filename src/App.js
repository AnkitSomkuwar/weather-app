import React, {useState, useEffect} from 'react'
import axios from 'axios'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import ToggleSwitch from './components/ToggleSwitch'
import './App.css'

const App = () => {
  const [weather, setWeather] = useState(null)
  const [theme, setTheme] = useState('light')

  const fetchWeather = async query => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=5f499b28958325e828ebf9be210b3677`,
      )
      setWeather(response.data)
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          alert('City not found. Please enter a valid city name.')
        } else {
          alert('Error fetching data. Please try again later.')
        }
      } else if (error.request) {
        alert('Network error. Please check your internet connection.')
      } else {
        alert('Error fetching data. Please try again later.')
      }
    }
  }

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className={`app ${theme}`}>
      <ToggleSwitch toggleTheme={toggleTheme} />
      <h1 className="weather-heading">
        Hey buddy Check out Weather Report Instant
      </h1>
      <SearchBar onSearch={fetchWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  )
}

export default App
