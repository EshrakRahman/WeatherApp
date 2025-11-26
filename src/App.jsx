import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import HourlyForecast from "./components/HourlyForecast";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="bg-neutral-900 min-h-screen px-4 py-4 lg:flex lg:justify-center">
      <div className="lg:flex lg:w-[80%] lg:justify-center lg:flex-col">
        <Header />
        <HeaderTitle />
        <Search />
        <div className="lg:flex lg:justify-center items-start lg:gap-3">
          <div className="lg:flex">
            <CurrentWeather />
          </div>
          <HourlyForecast />
        </div>
      </div>
    </div>
  );
}
