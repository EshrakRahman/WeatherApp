export default function DailyForecastCard({ day, img, higest, lowest }) {
  return (
    <div className="w-[105px] h-[165px] flex flex-col justify-center items-center rounded-xl p-3 bg-neutral-800 gap-4">
      <p className="text-[18px] font-dmsans font-medium text-neutral-0 ">
        {day}
      </p>
      <img className="h-15 w-15" src={img} alt="" />
      <div className="flex justify-between  w-full">
        <p className="higest font-dmsans font-medium text-base text-neutral-200">
          {higest} &deg;
        </p>
        <p className="lowest font-dmsans font-medium text-base text-neutral-200">
          {lowest} &deg;
        </p>
      </div>
    </div>
  );
}
