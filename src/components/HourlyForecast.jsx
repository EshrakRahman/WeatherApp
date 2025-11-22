import dropDownIcon from "../assets/images/icon-dropdown.svg";
import HourlyForecastCards from "./HourlyForecastCards";

export default function HourlyForecast() {
  return (
    <div className="bg-neutral-800 py-5 px-4 rounded-xl lg:flex lg:flex-col lg:justify-between">
      <div className="flex justify-between items-center gap-2">
        <p className="title text-neutral-200 font-dmsans text-[18px] font-medium  ">
          Hourly forecast
        </p>
        <div className="units w-[120px] h-[33px] px-2.5 py-2 bg-neutral-600 rounded-md flex justify-between items-center gap-1.5">
          <span className="font-dmsans font-medium text-sm  text-neutral-0 ">
            Tuesday
          </span>
          <img src={dropDownIcon} className="w-3 h-4" alt="Drop Down icon" />
        </div>
      </div>
      <HourlyForecastCards temp="20&deg;" time="3 PM" />
      <HourlyForecastCards temp="19&deg;" time="4 PM" />
      <HourlyForecastCards temp="18&deg;" time="5 PM" />
      <HourlyForecastCards temp="20&deg;" time="6 PM" />
      <HourlyForecastCards temp="20&deg;" time="7 PM" />
      <HourlyForecastCards temp="20&deg;" time="8 PM" />
      <HourlyForecastCards temp="20&deg;" time="9 PM" />
    </div>
  );
}
