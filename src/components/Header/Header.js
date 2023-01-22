import { useState, useEffect } from "react";
import MoonPath from "../../assets/moon.svg";
import SunPath from "../../assets/sun.svg";
import { useScroll, motion } from "framer-motion";
const Header = ({ setTheme, theme }) => {
  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  /*essa parte do controlnavbar e do useeffect eu sinceramente peguei do google*/
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <header
      className={`fixed top-0 left-0 z-30 flex  w-full border-b-2 bg-white shadow-md transition-all duration-700 ease-out dark:border-zinc-800 dark:bg-zinc-900 ${
        show ? "h-24" : "h-16"
      }`}
    >
      <div className="flex h-full w-full items-center justify-around transition-all duration-700 ease-out">
        <div className="transition-all duration-700 ease-out">
          <h1 className="font-Inter text-3xl font-bold text-zinc-900 transition-colors duration-500 ease-out dark:text-gray-100">
            <a href="#home">PunPun's</a>
          </h1>
        </div>

        <nav>
          {show && (
            <ul className="flex gap-8  align-text-bottom">
              <li className="text-md cursor-pointer font-Inter font-normal text-zinc-900 transition-colors duration-500 ease-out hover:text-gray-500 dark:text-gray-100">
                <a href="#about">About </a>
              </li>
              <li className="text-md cursor-pointer font-Inter font-normal text-zinc-900 transition-colors duration-500 ease-out hover:text-gray-500 dark:text-gray-100">
                <a href="#experience">Experience</a>
              </li>
              <li className="text-md cursor-pointer font-Inter font-normal text-zinc-900 transition-colors duration-500 ease-out hover:text-gray-500 dark:text-gray-100">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="text-md cursor-pointer font-Inter font-normal text-zinc-900 transition-colors duration-500 ease-out hover:text-gray-500 dark:text-gray-100">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          )}
        </nav>
        <div className="flex items-center">
          <label className="relative block h-8 w-20 " htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              className="hidden"
              onClick={() => setTheme()}
            />
            <div className="absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-3xl border-2 border-zinc-900 bg-white duration-300 ease-out dark:border-gray-100 dark:bg-zinc-900">
              <div
                className={`absolute bottom-0.5 left-1 z-10 h-6 w-6  rounded-full bg-zinc-900  duration-300 dark:bg-gray-100 ${
                  theme && "translate-x-11"
                }`}
              ></div>
              <img
                alt="theme icon"
                className={` absolute bottom-0.5 right-1 h-6  w-6 duration-300 ${
                  theme && "-translate-x-11"
                }`}
                src={theme ? SunPath : MoonPath}
              />
            </div>
          </label>
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 h-2 w-full bg-zinc-900 transition-colors duration-500 ease-out dark:bg-gray-100"
        style={{ scaleX: scrollYProgress }}
      />
    </header>
  );
};

export default Header;
