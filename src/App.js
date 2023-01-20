import Header from "./components/Header/Header";
import WhoIM from "./components/WhoIM/WhoIM";
import AboutExperienceContainer from "./components/AboutExperienceContainer/AboutExperienceContainer";
import CardsContactContainer from "./components/CardsContactContainer/CardsContactContainer";
import { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    theme
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);
  return (
    <div
      className={`${
        theme && "dark"
      }z-20 min-h-screen w-screen overflow-y-scroll bg-white font-Inter overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-thumb-rounded-3xl dark:bg-zinc-900`}
    >
      <div className="relative h-24 w-full overflow-x-hidden">
        <Header setTheme={() => setTheme(!theme)} theme={theme} />
      </div>
      <div className="absolute top-0 left-0 w-full">
        <WhoIM theme={theme} />
        <AboutExperienceContainer theme={theme} />
        <CardsContactContainer theme={theme} />
      </div>
    </div>
  );
}

export default App;
