import cloudyIcon from "../assets/images/icon-partly-cloudy.webp";
export default function HourlyForecastCards({ time, temp }) {
  return (
    <div className="p-3 h-15 bg-neutral-600 rounded-xl my-4 flex items-center">
      <div className="container flex items-center justify-between">
        <div className="time flex items-center gap-3">
          <img
            className="w-11 h-11"
            src={cloudyIcon}
            alt="partly cloudy icon"
          />
          <span className="font-dmsans text-xl font-medium text-neutral-0">
            {time}
          </span>
        </div>
        <p className="font-dmsans font-medium text-base text-neutral-0">
          {temp}
        </p>
      </div>
    </div>
  );
}
