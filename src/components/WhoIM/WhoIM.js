import wppPath from "../../assets/wpp.png";
import wppDarkPath from "../../assets/darkWpp.png";
const WhoIM = ({ theme }) => {
  return (
    <section className="">
      <div className="position relative h-screen w-full">
        <img
          src={theme ? wppDarkPath : wppPath}
          alt="Background Image"
          className={`${
            !theme && "h-5/6 w-5/6"
          } absolute right-0 bottom-0 bg-contain `}
        />
        <div className="absolute top-1/2 left-1/2 flex h-4/6 w-4/6 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-full  w-1/2 flex-col items-start gap-4 py-40">
            <h2 className=" text-2xl font-medium text-zinc-800 dark:text-gray-50">
              HELLO, MY NAME IS:
            </h2>
            <h1 className=" text-5xl font-bold text-zinc-900 dark:text-gray-100">
              Punpun Onodera
            </h1>
            <h3 className="font-regular  text-2xl text-zinc-800 dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              in auctor elit. Aenean sed arcu commodo, venenatis justo a,
              rhoncus nibh. Donec sed ex luctus, hendrerit massa id, interdum
              quam. Nunc vehicula mi quis massa volutpat fermentum. Nam purus
              neque, vulputate at varius in, tempor sed dui. Aenean at turpis
              nisl.
            </h3>
            <button className="rounded-lg bg-zinc-800 px-10 py-2 font-Inter text-lg font-semibold text-white duration-500 hover:bg-zinc-900 dark:text-gray-50">
              MY WORK
            </button>
          </div>
          <div className="hidden h-full w-1/2"></div>
        </div>
      </div>
    </section>
  );
};

export default WhoIM;
