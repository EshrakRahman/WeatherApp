import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import HourlyForecast from "./components/HourlyForecast";
import Search from "./components/Search";

export default function App() {
  return (
    <div className="bg-neutral-900 min-h-screen px-4 py-4">
      <Header />
      <HeaderTitle />
      <Search />
      <div className="lg:flex lg:gap-3">
        <div className="lg:flex">
          <CurrentWeather />
        </div>
        <HourlyForecast />
      </div>
    </div>
  );
}
