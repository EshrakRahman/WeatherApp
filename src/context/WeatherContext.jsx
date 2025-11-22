import React, { createContext, useState } from "react";

// 1. Create the context
export const WeatherContext = createContext();

// 2. Create the provider component
export default function WeatherProvider({ children }) {
  // State
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [selectedDay, setSelectedDay] = useState(null);

  // 3. Example fetch function (replace with axios later)
  function fetchWeather(city) {
    console.log("Fetching weather for:", city);
    setLocation(city);
  }

  // 4. Provide all state & functions via context
  return (
    <WeatherContext.Provider
      value={{
        location: location,
        setLocation: setLocation,
        weather: weather,
        setWeather: setWeather,
        units: units,
        setUnits: setUnits,
        selectedDay: selectedDay,
        setSelectedDay: setSelectedDay,
        fetchWeather: fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
