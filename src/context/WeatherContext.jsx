import React, { createContext, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("celsius"); // Open-Meteo uses celsius/fahrenheit
  const [selectedDay, setSelectedDay] = useState(null);

  async function fetchCoordinates(city) {
    try {
      const geoRes = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(
          city
        )}&count=1`
      );

      const place = geoRes.data?.results?.[0];
      if (!place) throw new Error("Location not found");

      return {
        name: place.name,
        country: place.country,
        latitude: place.latitude,
        longitude: place.longitude,
      };
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async function fetchWeather(city) {
    if (!city) return;

    try {
      const place = await fetchCoordinates(city);
      if (!place) throw new Error("Failed to get coordinates");

      const { latitude, longitude, name, country } = place;

      const hourlyParams = [
        "temperature_2m",
        "apparent_temperature",
        "relative_humidity_2m",
        "precipitation",
        "wind_speed_10m",
        "weather_code",
      ].join(",");

      const dailyParams = [
        "temperature_2m_max",
        "temperature_2m_min",
        "weather_code",
      ].join(",");

      const weatherRes = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=${hourlyParams}&daily=${dailyParams}&timezone=auto&temperature_unit=${units}`
      );

      const { hourly, daily } = weatherRes.data;

      setWeather({
        city: name,
        country: country,
        current: {
          temperature_2m: hourly.temperature_2m[0],
          apparent_temperature: hourly.apparent_temperature[0],
          relative_humidity_2m: hourly.relative_humidity_2m[0],
          precipitation: hourly.precipitation[0],
          wind_speed_10m: hourly.wind_speed_10m[0],
          weather_code: hourly.weather_code[0],
        },
        hourly: {
          time: hourly.time,
          temperature_2m: hourly.temperature_2m,
          apparent_temperature: hourly.apparent_temperature,
          relative_humidity_2m: hourly.relative_humidity_2m,
          precipitation: hourly.precipitation,
          wind_speed_10m: hourly.wind_speed_10m,
          weather_code: hourly.weather_code,
        },
        daily: {
          time: daily.time,
          temperature_2m_max: daily.temperature_2m_max,
          temperature_2m_min: daily.temperature_2m_min,
          weather_code: daily.weather_code,
        },
      });

      setLocation(city);
    } catch (error) {
      console.error(error);
      setWeather(null);
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        location,
        setLocation,
        weather,
        setWeather,
        units,
        setUnits,
        selectedDay,
        setSelectedDay,
        fetchWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}
