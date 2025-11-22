import weatherBg from "../assets/images/bg-today-small.svg";
import weatherIcon from "../assets/images/icon-sunny.webp";
import CurrentWeatherCards from "./CurrentWeatherCards";
import DailyForecast from "./DailyForecast";

export default function CurrentWeather() {
  return (
    <div className="cards-container flex flex-col sm:flex-ro  justify-center gap-3">
      <div
        className="weather-info w-full px-6 py-8 h-64 bg-cover bg-center rounded-lg flex"
        style={{ backgroundImage: `url(${weatherBg})` }}
      >
        <div className="container flex flex-col sm:flex-row sm:justify-between items-center justify-center">
          <div className=" text-center ">
            <p className="place text-3xl font-dmsans font-bold text-neutral-0 ">
              Berlin, Germany
            </p>
            <p className="date font-dmsans text-[18px] text-neutral-0 opacity-80 ">
              Tuesday, Aug 5, 2025
            </p>
          </div>
          <div className="weather-value flex gap-3 sm:gap-4 items-center  justify-between">
            <img
              className="h-[120px] w-[120px]"
              src={weatherIcon}
              alt="Sunny clear icon"
            />
            <span
              className="font-dmsans text-8xl font-semibold italic text-neutral-0
            "
            >
              {" "}
              20&deg;{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-evenly sm:justify-evenly ">
        <CurrentWeatherCards title="Feels like" value="18" />
        <CurrentWeatherCards title="Humidity" value="46%" />
        <CurrentWeatherCards title="Wind" value="14 km/h" />
        <CurrentWeatherCards title="Precipitation" value="0 mm" />
      </div>
      <div className="daily-forecast mb-10">
        <DailyForecast />
      </div>
    </div>
  );
}
