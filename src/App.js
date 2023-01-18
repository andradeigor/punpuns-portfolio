import Header from "./components/Header/Header";
import HowIM from "./components/HowIM/HowIM";
function App() {
  return (
    <body className=" bg-white relative w-screen h-screen overflow-x-hidden overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-300 z-20 scrollbar-thumb-rounded-3xl">
      <Header />
      <HowIM />
    </body>
  );
}

export default App;
