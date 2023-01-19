import Header from "./components/Header/Header";
import WhoIM from "./components/WhoIM/WhoIM";
import About from "./components/About/About";
function App() {
  return (
    <body className="relative z-20 h-screen w-screen overflow-y-scroll bg-white overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-thumb-rounded-3xl">
      <Header />
      <div className="absolute top-0 left-0 w-full">
        <WhoIM />
        <About />
        <About />
      </div>
    </body>
  );
}

export default App;
