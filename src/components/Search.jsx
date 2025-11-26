import { useContext, useState } from "react";
import searchIcon from "../assets/images/icon-search.svg";
import { WeatherContext } from "../context/WeatherContext";

export default function Search() {
  const { fetchWeather } = useContext(WeatherContext);
  const [input, setInput] = useState("");

  function handleLocationSearch() {
    const trimmedInput = input.trim();
    if (trimmedInput) {
      fetchWeather(trimmedInput); // call context function
      setInput(""); // optional: clear input after search
    }
  }

  // Handle Enter key press
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleLocationSearch();
    }
    console.log(input);
  }

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
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full text-neutral-0 bg-neutral-800 py-4 pl-12 pr-4 rounded-xl placeholder:font-dmsans placeholder:text-lg placeholder:text-neutral-200 border-none"
          placeholder="Search for a place ..."
        />
      </div>

      <button
        onClick={handleLocationSearch}
        className="w-full sm:w-[20%] bg-blue-500 py-4 rounded-xl text-neutral-0 font-dmsans hover:bg-sky-700 hover:cursor-pointer text-xl border-none"
      >
        Search
      </button>
    </div>
  );
}
