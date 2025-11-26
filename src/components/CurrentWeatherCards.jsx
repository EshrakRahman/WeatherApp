export default function CurrentWeatherCards({ title, value }) {
  return (
    <div className="card p-3 bg-neutral-800 rounded-xl w-[164px] h-[118px] flex flex-col gap-4 justify-center">
      <p className="title text-neutral-200 font-dmsans text-[18px] font-medium  ">
        {title}
      </p>
      <p className="text-neutral-0 text-3xl  font-light font-dmsans ">
        {value}
      </p>
    </div>
  );
}
