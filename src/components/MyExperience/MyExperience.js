import CheckMarkPath from "../../assets/check.svg";

const Myexperience = () => {
  return (
    <div className="flex h-1/2 w-full justify-center bg-white px-64 pt-16">
      <div className="flex h-full w-2/3 flex-col ">
        <div className="flex w-full flex-col items-center ">
          <h1 className="mb-4 font-Inter text-4xl font-bold">MY EXPERIENCE</h1>
          <div className="flex flex-col items-center gap-3 ">
            <div className="h-0.5 w-24 rounded bg-zinc-900" />
            <div className="h-0.5 w-48 rounded bg-zinc-900" />
          </div>
        </div>
        <div className="flex h-full w-full gap-x-32  py-10 pt-14">
          <div className="relative flex h-full w-1/2 flex-col  ">
            <div className="flex h-1/2 w-full">
              <div className="h-full w-1/2 ">
                <h3 className="text-md font-light text-zinc-800">Nerima</h3>
                <h4 className="text-sm font-extralight text-zinc-800">
                  2007-2010
                </h4>
              </div>
              <div className="flex h-full w-1/2 gap-x-2 ">
                <div className="h-8 w-8">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900">
                    <img src={CheckMarkPath} alt="" className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium text-zinc-900">
                    Elementary School
                  </h1>
                  <h2 className="pt-1 text-sm font-light text-zinc-800">
                    My dream back there was to become a Space Scientist
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex h-1/2 w-full ">
              <div className="h-full w-1/2 ">
                <h3 className="text-md font-light text-zinc-800">Nerima</h3>
                <h4 className="text-sm font-extralight text-zinc-800">
                  2010-2013
                </h4>
              </div>
              <div className="flex h-full w-1/2 gap-x-2 ">
                <div className="">
                  <div className="z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900">
                    <img src={CheckMarkPath} alt="" className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium text-zinc-900">
                    High School
                  </h1>
                  <h2 className="pt-1 text-sm font-light text-zinc-800">
                    Aiko hates me
                  </h2>
                </div>
              </div>
            </div>
            <hr className="absolute top-7 left-[211px]  h-28 w-0.5 border-l-[1px] border-dashed border-l-zinc-900 "></hr>
          </div>
          <div className="relative flex h-full w-1/2 flex-col ">
            <div className="flex h-1/2 w-full">
              <div className="h-full w-1/2 ">
                <h3 className="text-md font-light text-zinc-800">Fukushima</h3>
                <h4 className="text-sm font-extralight text-zinc-800">
                  2013-2014
                </h4>
              </div>
              <div className="flex h-full w-1/2 gap-x-2 ">
                <div className="h-8 w-8">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900">
                    <img src={CheckMarkPath} alt="" className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium text-zinc-900">
                    Early 20s
                  </h1>
                  <h2 className="pt-1 text-sm font-light text-zinc-800">
                    Maybe Aiko don't hates me anymore and everything is gonna be
                    perfect
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex h-1/2 w-full ">
              <div className="h-full w-1/2 ">
                <h3 className="text-md font-light text-zinc-800">Kagoshima</h3>
                <h4 className="text-sm font-extralight text-zinc-800">
                  2014-2015
                </h4>
              </div>
              <div className="flex h-full w-1/2 gap-x-2 ">
                <div className="">
                  <div className="z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900">
                    <img src={CheckMarkPath} alt="" className="h-4 w-4" />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium text-zinc-900">
                    Early 20s
                  </h1>
                  <h2 className="pt-1 text-sm font-light text-zinc-800">
                    Oh god.
                  </h2>
                </div>
              </div>
            </div>
            <hr className="absolute top-7 left-[211px]  h-28 w-0.5 border-l-[1px] border-dashed border-l-zinc-900 "></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myexperience;
