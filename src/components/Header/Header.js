import { useState } from "react";
import MoonPath from "../../assets/moon.svg";
import SunPath from "../../assets/sun.svg";
const Header = () => {
  const [theme, setTheme] = useState(false);
  return (
    <header className="w-full h-24 border-b-2 px-64 shadow-md sticky top-0 left-0 bg-white">
      <div className="flex w-full h-full items-center justify-between ">
        <div className="">
          <h1 className="font-Inter text-3xl text-black font-bold">PunPun's</h1>
        </div>
        <nav>
          <ul className="flex gap-8  align-text-bottom">
            <li className="font-Inter text-md text-black font-normal hover:text-gray-500 cursor-pointer duration-150 ease-out">
              About
            </li>
            <li className="font-Inter text-md text-black font-normal hover:text-gray-500 cursor-pointer duration-150 ease-out">
              Portfolio
            </li>
            <li className="font-Inter text-md text-black font-normal hover:text-gray-500 cursor-pointer duration-150 ease-out">
              Expirience
            </li>
            <li className="font-Inter text-md text-black font-normal hover:text-gray-500 cursor-pointer duration-150 ease-out">
              Contact
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <label className="block w-20 h-8 relative " htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              onClick={() => setTheme(!theme)}
            />
            <div className="bg-white border-black border-2 cursor-pointer bottom-0 left-0 rounded-3xl right-0 top-0 absolute ease-out duration-300 ">
              <div
                className={`bg-black bottom-0.5 left-1 h-6 w-6  absolute duration-300  rounded-full z-10 ${
                  theme && "translate-x-11"
                }`}
              ></div>
              <img
                className={` bottom-0.5 right-1 h-6 w-6  absolute duration-300 ${
                  theme && "-translate-x-11"
                }`}
                src={theme ? SunPath : MoonPath}
              />
            </div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
