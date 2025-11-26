import DailyForecastCard from "./DailyForecastCard";
import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function DailyForecast() {
  const { weather, units } = useContext(WeatherContext);

  if (!weather || !weather.daily) return null;

  const tempUnit = units === "celsius" ? "°C" : "°F";

  const weatherIcons = {
    0: "https://cdn-icons-png.flaticon.com/512/869/869869.png",
    1: "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
    2: "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
    3: "https://cdn-icons-png.flaticon.com/512/414/414825.png",
    45: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    48: "https://cdn-icons-png.flaticon.com/512/1197/1197102.png",
    51: "https://cdn-icons-png.flaticon.com/512/3076/3076127.png",
    53: "https://cdn-icons-png.flaticon.com/512/3076/3076127.png",
    55: "https://cdn-icons-png.flaticon.com/512/3076/3076127.png",
    61: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    63: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    65: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
    71: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    73: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    75: "https://cdn-icons-png.flaticon.com/512/642/642102.png",
    80: "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
    81: "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
    82: "https://cdn-icons-png.flaticon.com/512/1163/1163657.png",
    95: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    96: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
    99: "https://cdn-icons-png.flaticon.com/512/1146/1146869.png",
  };

  return (
    <div className="mt-8">
      <p className="font-dmsans text-xl text-neutral-0 font-semibold mb-4">
        Daily forecast
      </p>
      <div className="flex flex-wrap gap-2.5 justify-evenly sm:justify-between">
        {weather.daily.time.map((date, index) => {
          const code = weather.daily.weather_code?.[index] ?? 0;
          const icon = weatherIcons[code] || weatherIcons[0];

          return (
            <DailyForecastCard
              key={index}
              day={new Date(date).toLocaleDateString("en-US", {
                weekday: "short",
              })}
              img={icon}
              higest={Math.round(weather.daily.temperature_2m_max[index])}
              lowest={Math.round(weather.daily.temperature_2m_min[index])}
              unit={tempUnit}
            />
          );
        })}
      </div>
    </div>
  );
}
