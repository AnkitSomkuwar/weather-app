# Weather App

This is a weather application built using React that fetches current weather data based on user input using the Open Weather API. It includes features like dark mode toggle and additional weather information.

## Features

- Display current weather information based on user input
- Dark mode and light mode toggle
- Responsive design
- Additional weather details like humidity, wind speed, and weather description

## Technologies Used

- React
- Axios for API calls
- HTML, CSS

## How to Run the Application

Steps to Use the Weather App
Open the Weather App:

Enter a City Name:

You'll see an input field labeled "Enter city name." Click on the input field and type the name of the city you want to get weather information for.
Search for Weather Information:

After typing the city name, click the "Search" button next to the input field or press the Enter key on your keyboard. This action will fetch the weather data for the specified city.
View Weather Information:

If the city name is valid and the data is successfully fetched from the OpenWeather API, you'll see the weather information displayed on the screen. This includes:
City Name
Current Date and Time
Temperature in Celsius
Weather Description (e.g., clear sky, rain, etc.)
Humidity Percentage
Wind Speed in meters per second
Toggle Between Light Mode and Dark Mode:

There is a switch at the top of the page to toggle between light mode and dark mode. Use this switch to change the theme of the app as per your preference.

## Approach of this Weather app

Setup Environment: Initialize a React project and install necessary dependencies.

API Integration: Use the OpenWeather API to fetch weather data based on user input.

User Input Handling: Implement a search bar for users to enter city names and fetch corresponding weather data.

Display Weather Information: Create a weather card component to display the fetched weather details, including location, temperature, date, time, humidity, and wind speed.

Theme Toggle: Add a toggle switch to allow users to switch between light mode and dark mode.

Responsive Design: Ensure the application is responsive and works well across various devices for a consistent user experience.


## Issue and their Limitation 

Here are some known issues or limitations of the weather application:

1. Limited Error Handling Currently, the error handling only alerts the user for city not found or network errors. It doesn't handle other potential issues such as API rate limits or unexpected server errors gracefully.
   
2. Single Location Search The app allows users to fetch weather information for one location at a time. It does not support displaying weather information for multiple locations simultaneously.

3. Basic Weather Information The app displays basic weather details such as temperature, weather description, humidity, and wind speed. It does not provide more detailed information like hourly forecasts, UV index, or precipitation probabilities.

4. Limited Styling Customization While the app supports light and dark modes, other customization options (e.g., changing color themes or font sizes) are not available.

