import Header from "./components/Header/Header";
import HowIM from "./components/HowIM/HowIM";
function App() {
  return (
    <body className=" relative z-20 h-screen w-screen overflow-y-scroll bg-white overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 scrollbar-thumb-rounded-3xl">
      <Header />
      <HowIM />
    </body>
  );
}

export default App;
