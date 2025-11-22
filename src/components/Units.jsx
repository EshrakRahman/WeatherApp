import settingsIcon from "../assets/images/icon-units.svg";
import dropDownIcon from "../assets/images/icon-dropdown.svg";
import { useState } from "react";

export default function Units() {
  const [dropDown, setDropDown] = useState(false);

  function handleDropDown() {}

  return (
    <div className="units h-[33px] px-2.5 py-2 bg-neutral-800 rounded-md flex justify-between items-center gap-1.5">
      <img src={settingsIcon} alt="Settings icon" />
      <span
        className="font-dmsans font-medium text-sm  text-neutral-0 "
        onClick={handleDropDown}
      >
        Units
      </span>
      <img src={dropDownIcon} alt="Drop Down icon" />
    </div>
  );
}
