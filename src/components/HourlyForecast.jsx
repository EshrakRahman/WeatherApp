import React, { useContext, useState, useEffect } from "react";
import dropDownIcon from "../assets/images/icon-dropdown.svg";
import HourlyForecastCards from "./HourlyForecastCards";
import { WeatherContext } from "../context/WeatherContext";

export default function HourlyForecast() {
  const { weather, units, selectedDay, setSelectedDay } =
    useContext(WeatherContext);
  const [hoursForDay, setHoursForDay] = useState([]);
  const [availableDays, setAvailableDays] = useState([]);

  const tempUnit = units === "celsius" ? "°C" : "°F";

  useEffect(() => {
    if (weather && weather.daily) {
      setAvailableDays(weather.daily.time);
      if (!selectedDay) setSelectedDay(weather.daily.time[0]);
    }
  }, [weather]);

  useEffect(() => {
    if (!weather || !selectedDay) return;

    const filteredHours = weather.hourly.time
      .map((t, i) => ({
        time: t,
        temperature: weather.hourly.temperature_2m[i],
        precipitation: weather.hourly.precipitation[i],
        wind_speed: weather.hourly.wind_speed_10m[i],
      }))
      .filter((h) => h.time.startsWith(selectedDay))
      .slice(0, 7); // only 5 hours

    setHoursForDay(filteredHours);
  }, [weather, selectedDay]);

  if (!weather || !weather.hourly) {
    return (
      <p className="text-neutral-0">Search a location to see hourly forecast</p>
    );
  }

  return (
    <div className="bg-neutral-800 py-5 px-4 rounded-xl lg:flex lg:flex-col lg:justify-between">
      <div className="flex justify-between items-center gap-2">
        <p className="title text-neutral-200 font-dmsans text-[18px] font-medium">
          Hourly forecast
        </p>
        <div className="units w-[120px] h-[33px] px-2.5 py-2 bg-neutral-600 rounded-md flex justify-between items-center gap-1.5">
          <select
            className="bg-transparent text-neutral-0 font-dmsans font-medium text-sm outline-none"
            value={selectedDay || ""}
            onChange={(e) => setSelectedDay(e.target.value)}
          >
            {availableDays.map((day) => (
              <option key={day} value={day}>
                {new Date(day).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </option>
            ))}
          </select>
          {/* <img src={dropDownIcon} className="w-3 h-4" alt="Drop Down icon" /> */}
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        {hoursForDay.length > 0 ? (
          hoursForDay.map((hour, index) => {
            const time = new Date(hour.time).toLocaleTimeString("en-US", {
              hour: "numeric",
              hour12: true,
            });
            return (
              <HourlyForecastCards
                key={index}
                time={time}
                temp={`${Math.round(hour.temperature)}${tempUnit}`}
                precipitation={hour.precipitation}
                wind={hour.wind_speed}
              />
            );
          })
        ) : (
          <p className="text-neutral-0 px-4">
            No hourly data available for this day.
          </p>
        )}
      </div>
    </div>
  );
}
