import searchIcon from "../assets/images/icon-search.svg";

export default function Search() {
  return (
    <div className="flex flex-col sm:flex-row items-center mb-10 w-full gap-4">
      <div className="relative w-full">
        <img
          className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2"
          src={searchIcon}
          alt="search icon"
        />

        <input
          type="text"
          className="w-full bg-neutral-800 py-4 pl-12 pr-4 rounded-xl placeholder:font-dmsans placeholder:text-lg placeholder:text-neutral-200 border-none"
          placeholder="Search for a place ..."
        />
      </div>

      <button className="w-full sm:w-[20%] bg-blue-500 py-4 rounded-xl text-neutral-0 font-dmsans text-xl border-none">
        Search
      </button>
    </div>
  );
}
