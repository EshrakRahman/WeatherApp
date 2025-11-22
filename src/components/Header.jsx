import Units from "./Units";
import logo from "../assets/images/logo.svg";

export default function Header() {
  return (
    <div className="header flex justify-between items-center p-2">
      <div className="logo space-x-2 flex items-center">
        <img
          className="w-[138px] h-7  sm:h-10"
          src={logo}
          alt="circle weather app logo"
        />
      </div>
      <Units />
    </div>
  );
}
