import { useContext } from "react";
import weatherBg from "../assets/images/bg-today-small.svg";
import { WeatherContext } from "../context/WeatherContext";
import CurrentWeatherCards from "./CurrentWeatherCards";
import DailyForecast from "./DailyForecast";

export default function CurrentWeather() {
  const { weather, units } = useContext(WeatherContext);
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!weather) {
    return (
      <div className="cards-container flex flex-col sm:flex-row justify-center gap-3">
        <p className="text-neutral-0 font-dmsans text-xl">
          Search for a location to see weather
        </p>
      </div>
    );
  }

  const tempUnit = units === "celsius" ? "°C" : "°F";
  const windUnit = units === "celsius" ? "km/h" : "mph";

  const metrics = [
    {
      title: "Feels like",
      value: `${weather.current.apparent_temperature}${tempUnit}`,
    },
    { title: "Humidity", value: `${weather.current.relative_humidity_2m}%` },
    { title: "Wind", value: `${weather.current.wind_speed_10m} ${windUnit}` },
    {
      title: "Precipitation",
      value: `${weather.current.precipitation ?? 0} mm`,
    },
  ];

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

  const currentIcon =
    weatherIcons[weather.current.weather_code] || weatherIcons[0];

  return (
    <div className="cards-container flex flex-col sm:flex-ro justify-center gap-3">
      <div
        className="weather-info w-full px-6 py-8 h-64 bg-cover bg-center rounded-lg flex"
        style={{ backgroundImage: `url(${weatherBg})` }}
      >
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center justify-center">
          <div className="text-center">
            <p className="place text-3xl font-dmsans font-bold text-neutral-0">
              {weather.city}, {weather.country}
            </p>
            <p className="date font-dmsans text-[18px] text-neutral-0 opacity-80">
              {formattedDate}
            </p>
          </div>

          <div className="weather-value flex gap-3 sm:gap-4 items-center justify-between">
            <img
              className="h-[120px] w-[120px]"
              src={currentIcon}
              alt="Weather icon"
            />
            <span className="font-dmsans text-8xl font-semibold italic text-neutral-0">
              {Math.round(weather.current.temperature_2m)}
              {tempUnit}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-evenly sm:justify-evenly">
        {metrics.map((metric) => (
          <CurrentWeatherCards
            key={metric.title}
            title={metric.title}
            value={metric.value}
          />
        ))}
      </div>

      <div className="daily-forecast mb-10">
        <DailyForecast />
      </div>
    </div>
  );
}
