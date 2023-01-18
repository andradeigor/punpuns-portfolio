import wppPath from "../../assets/wpp.png";

const HowIM = () => {
  return (
    <main className="w-full h-full absolute top-0 left-0">
      <div className="position relative h-full w-full">
        <img
          src={wppPath}
          alt="Background Image"
          className=" bg-contain absolute right-0 bottom-0 w-5/6 h-5/6"
        />
      </div>
    </main>
  );
};

export default HowIM;
