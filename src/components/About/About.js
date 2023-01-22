const About = ({ theme }) => {
  return (
    <div className="flex h-1/2 w-full justify-center  bg-gray-100 px-64  transition-colors duration-500 ease-out dark:bg-zinc-800">
      <div className="flex h-full w-2/3 flex-col py-10">
        <div className="flex w-full flex-col items-center ">
          <h1 className="mb-4 font-Inter text-4xl font-bold text-zinc-900 dark:text-gray-100">
            ABOUT ME
          </h1>
          <div className="flex flex-col items-center gap-3 ">
            <div className="h-0.5 w-24 rounded bg-zinc-900 dark:bg-gray-100" />
            <div className="h-0.5 w-48 rounded bg-zinc-900 dark:bg-gray-100" />
          </div>
        </div>
        <div className="flex h-full w-full gap-32 py-10 ">
          <div className="flex h-full w-1/2 flex-col gap-4">
            <h1 className="font-Inter text-2xl font-bold text-zinc-900 dark:text-gray-100 ">
              Hi, again
            </h1>
            <p className="font-regular  mb-8 font-Inter text-base text-zinc-800  dark:text-gray-50">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              in auctor elit. Aenean sed arcu commodo, venenatis justo a,
              rhoncus nibh. Donec sed ex luctus, hendrerit massa id, interdum
              quam. Nunc vehicula mi quis massa volutpat fermentum.
            </p>
            <button className="h-12 w-52 rounded-lg bg-zinc-800 font-Inter text-sm font-semibold text-white duration-500 hover:bg-zinc-900 dark:bg-zinc-900 dark:hover:bg-zinc-800">
              DOWNLOAD MY CV
            </button>
          </div>
          <div className="flex h-full w-1/2 flex-col justify-around  transition-all ">
            <div className="h-16 w-full">
              <p className="mb-4 text-base font-bold text-zinc-900 dark:text-gray-100">
                Sadness
              </p>
              <div className=" relative w-full ">
                <div className="absolute inset-0 h-2 rounded bg-zinc-900/40 dark:bg-gray-100/40"></div>
                <div className="absolute inset-0 h-2 w-10/12 rounded bg-zinc-900 dark:bg-gray-100"></div>
              </div>
            </div>
            <div className="h-16 w-full">
              <p className="mb-4 text-base font-bold text-zinc-900 dark:text-gray-100">
                Hopoless
              </p>
              <div className=" relative w-full ">
                <div className="absolute inset-0 h-2 rounded bg-zinc-900/40 dark:bg-gray-100/40"></div>
                <div className="absolute inset-0 h-2 w-8/12 rounded bg-zinc-900 dark:bg-gray-100"></div>
              </div>
            </div>
            <div className="h-16 w-full">
              <p className="mb-4 text-base font-bold text-zinc-900 dark:text-gray-100">
                Depression
              </p>
              <div className=" relative w-full ">
                <div className="absolute inset-0 h-2 rounded bg-zinc-900/40 dark:bg-gray-100/40"></div>
                <div className="absolute inset-0 h-2 w-1/2 rounded bg-zinc-900 dark:bg-gray-100"></div>
              </div>
            </div>
            {theme && (
              <div className="h-16 w-full">
                <p className="mb-4 text-base font-bold dark:text-red-600">
                  Guiltiness
                </p>
                <div className=" relative w-full ">
                  <div className="absolute inset-0 h-2 rounded bg-zinc-900/40 dark:bg-gray-100/40"></div>
                  <div className="absolute inset-0 h-2 w-full rounded bg-red-600"></div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
