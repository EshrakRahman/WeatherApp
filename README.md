# Frontend Mentor - Weather App Solution

This is a solution to the [Weather app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)

  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)

- [My process](#my-process)

  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)
_Desktop`./src/assets/screenshoots/desktop.png`_
_Tablet`./src/assets/screenshoots/tablet.png`_
_Mobile`./src/assets/screenshoots/mobile.png`_

### Links

- Solution URL: [GitHub Repository](https://github.com/EshrakRahman/WeatherApp)
- Live Site URL: [Weather App Live](https://eshrak-weatherapp.netlify.app/)

## My process

### Built with

- React JS
- Context API for state management
- Axios for API requests
- CSS Flexbox and Grid
- Responsive design (mobile-first)
- Open-Meteo API for weather and geocoding

### What I learned

- Handling and mapping API data to components dynamically
- Using React Context API to manage global state for weather, units, and selected day
- Conditional rendering for empty or loading states
- Responsive layouts using Flexbox and Grid
- Displaying daily and hourly forecasts using mapped arrays
- Dynamically updating hourly forecast based on selected day

**Challenges overcome:**

- Mapping Open-Meteo API data to a structure suitable for both current, daily, and hourly forecasts
- Handling different units (Celsius/Fahrenheit) without breaking layout
- Preventing layout break when there’s no search data or hourly forecast is empty

### Continued development

- Improve accuracy and detail of weather information
- Add smooth animations for changing days and units
- Include weather icons dynamically based on Open-Meteo weather codes
- Add user location detection to auto-load weather on page load

### Useful resources

- [Open-Meteo API Documentation](https://open-meteo.com/en/docs) – For fetching weather and geocoding data
- [Frontend Mentor](https://www.frontendmentor.io) – Challenge inspiration and project requirements
- [React Docs](https://reactjs.org/docs/getting-started.html) – For React fundamentals and Context API guidance

## Author

- Name: Eshrak Rahman
- Website: [eshrak.me](https://eshrak.me)
- Frontend Mentor: [@EshrakRahman](https://www.frontendmentor.io/profile/EshrakRahman)
- Twitter: [@EshrakRahman](https://twitter.com/EshrakRahman)

## Acknowledgments

- Thanks to Frontend Mentor for providing real-world challenge projects
- Open-Meteo for a free, reliable weather API
