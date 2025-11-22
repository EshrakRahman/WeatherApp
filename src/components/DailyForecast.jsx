import DailyForecastCard from "./DailyForecastCard";
import rainyIcon from "../assets/images/icon-rain.webp";

export default function DailyForecast() {
  return (
    <div className="mt-8">
      <p className="font-dmsans text-xl text-neutral-0 font-semibold mb-4 ">
        Daily forecast
      </p>
      <div className="flex flex-wrap gap-2.5 justify-evenly sm:justify-between">
        <DailyForecastCard img={rainyIcon} day="Tue" higest="20" lowest="14" />
        <DailyForecastCard img={rainyIcon} day="Tue" higest="20" lowest="14" />
        <DailyForecastCard img={rainyIcon} day="Tue" higest="20" lowest="14" />
        <DailyForecastCard img={rainyIcon} day="Tue" higest="20" lowest="14" />
        <DailyForecastCard img={rainyIcon} day="Tue" higest="20" lowest="14" />
        <DailyForecastCard img={rainyIcon} day="Tue" higest="20" lowest="14" />
        <DailyForecastCard img={rainyIcon} day="Tue" higest="20" lowest="14" />
      </div>
    </div>
  );
}
