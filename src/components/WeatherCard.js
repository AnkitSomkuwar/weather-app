import React from 'react'
import './WeatherCard.css'

const WeatherCard = ({weather}) => {
  if (!weather) return null

  const {name, main, weather: weatherDetails, wind, dt} = weather
  const date = new Date(dt * 1000)

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>
        {date.toLocaleDateString()} {date.toLocaleTimeString()}
      </p>
      <p>Temperature: {main.temp}°C</p>
      <p>Weather: {weatherDetails[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  )
}

export default WeatherCard
