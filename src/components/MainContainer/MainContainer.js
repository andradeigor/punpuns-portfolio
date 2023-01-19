const MainContainer = ({ children }) => {
  return (
    <main className=" relative z-20 h-screen w-screen bg-white ">
      {children}
    </main>
  );
};

export default MainContainer;
