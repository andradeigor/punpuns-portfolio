const About = () => {
  return (
    <section className="h-screen w-full">
      <div className="flex h-1/2 w-full justify-center  bg-gray-100 px-64">
        <div className="flex h-full w-2/3 flex-col py-10">
          <div className="flex w-full flex-col items-center ">
            <h1 className="mb-4 font-Inter text-4xl font-bold">ABOUT ME</h1>
            <div className="flex flex-col items-center gap-3 ">
              <div className="h-0.5 w-24 rounded bg-zinc-900" />
              <div className="h-0.5 w-48 rounded bg-zinc-900" />
            </div>
          </div>
          <div className="flex h-full w-full gap-32 py-10">
            <div className="flex h-full w-1/2 flex-col gap-4">
              <h1 className="font-Inter text-2xl font-bold"> Hi, again</h1>
              <p className="font-regular  mb-8 font-Inter text-base text-zinc-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in auctor elit. Aenean sed arcu commodo, venenatis justo a,
                rhoncus nibh. Donec sed ex luctus, hendrerit massa id, interdum
                quam. Nunc vehicula mi quis massa volutpat fermentum.
              </p>
              <button className="h-12 w-52 rounded-lg bg-zinc-800 font-Inter text-sm font-semibold text-white">
                DOWNLOAD MY CV
              </button>
            </div>
            <div className="flex h-full w-1/2 flex-col justify-around">
              <div className="h-16 w-full">
                <p className="mb-4 text-base font-bold text-zinc-900">
                  Sadness
                </p>
                <div className=" relative w-full ">
                  <div className="absolute inset-0 h-2 rounded bg-zinc-900/40"></div>
                  <div className="absolute inset-0 h-2 w-10/12 rounded bg-zinc-900"></div>
                </div>
              </div>
              <div className="h-16 w-full">
                <p className="mb-4 text-base font-bold text-zinc-900">
                  Hopoless
                </p>
                <div className=" relative w-full ">
                  <div className="absolute inset-0 h-2 rounded bg-zinc-900/40"></div>
                  <div className="absolute inset-0 h-2 w-8/12 rounded bg-zinc-900"></div>
                </div>
              </div>
              <div className="h-16 w-full">
                <p className="mb-4 text-base font-bold text-zinc-900">
                  Depression
                </p>
                <div className=" relative w-full ">
                  <div className="absolute inset-0 h-2 rounded bg-zinc-900/40"></div>
                  <div className="absolute inset-0 h-2 w-1/2 rounded bg-zinc-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1/2 w-full bg-white px-64"></div>
    </section>
  );
};

export default About;
