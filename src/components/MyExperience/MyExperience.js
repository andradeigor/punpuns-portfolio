import CheckMarkPath from "../../assets/check.svg";
import DarkCheckMarkPath from "../../assets/darkCheck.svg";
import { motion } from "framer-motion";

const Myexperience = ({ theme }) => {
  return (
    <div className="flex h-1/2 w-full justify-center bg-white px-64 pt-16 transition-colors duration-500 ease-out dark:bg-zinc-900">
      <div className="flex h-full w-2/3 flex-col ">
        <div className="flex w-full flex-col items-center ">
          <h1 className="mb-4 font-Inter text-4xl font-bold text-zinc-900 dark:text-gray-100">
            MY EXPERIENCE
          </h1>
          <div className="flex flex-col items-center gap-3 ">
            <div className="h-0.5 w-24 rounded bg-zinc-900 dark:bg-gray-100" />
            <div className="h-0.5 w-48 rounded bg-zinc-900 dark:bg-gray-100" />
          </div>
        </div>
        <div className="flex h-full w-full gap-x-32  py-10 pt-14">
          <div className="relative flex h-full w-1/2 flex-col  ">
            <div className="flex h-1/2 w-full">
              <div className="h-full w-1/2 ">
                <h3 className="text-md font-light text-zinc-800 dark:text-gray-50">
                  Nerima
                </h3>
                <h4 className="text-sm font-extralight text-zinc-800 dark:text-gray-50">
                  2007-2010
                </h4>
              </div>
              <div className="flex h-full w-1/2 gap-x-2 ">
                <div className="h-8 w-8">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 dark:bg-gray-100">
                    <img
                      src={theme ? DarkCheckMarkPath : CheckMarkPath}
                      alt=""
                      className="h-4 w-4"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium text-zinc-900 dark:text-gray-100">
                    Elementary School
                  </h1>
                  <h2 className="pt-1 text-sm font-light text-zinc-800 dark:text-gray-50">
                    My dream back them was to become a Space Scientist.{" "}
                    {theme && (
                      <motion.span
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className=" text-sm font-bold text-red-500"
                      >
                        And I failed
                      </motion.span>
                    )}
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex h-1/2 w-full ">
              <div className="h-full w-1/2 ">
                <h3 className="text-md font-light text-zinc-800 dark:text-gray-50">
                  Nerima
                </h3>
                <h4 className="text-sm font-extralight text-zinc-800 dark:text-gray-50">
                  2010-2013
                </h4>
              </div>
              <div className="flex h-full w-1/2 gap-x-2 ">
                <div className="">
                  <div className="z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 dark:bg-gray-100">
                    <img
                      src={theme ? DarkCheckMarkPath : CheckMarkPath}
                      alt=""
                      className="h-4 w-4"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium text-zinc-900 dark:text-gray-100">
                    High School
                  </h1>
                  <h2 className="pt-1 text-sm font-light text-zinc-800 dark:text-gray-50">
                    Aiko{" "}
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1.2 }}
                      className="transition-all duration-1000 dark:font-bold dark:text-red-500 "
                    >
                      hates
                    </motion.span>{" "}
                    me
                  </h2>
                </div>
              </div>
            </div>
            <hr className="absolute top-6 left-[211px]  h-28 w-0.5 border-l-[1px] border-dashed border-l-zinc-900 dark:border-l-gray-100"></hr>
          </div>
          <div className="relative flex h-full w-1/2 flex-col ">
            <div className="flex h-1/2 w-full">
              <div className="h-full w-1/2 ">
                <h3 className="text-md font-light text-zinc-800 dark:text-gray-50">
                  Fukushima
                </h3>
                <h4 className="text-sm font-extralight text-zinc-800 dark:text-gray-50">
                  2013-2014
                </h4>
              </div>
              <div className="flex h-full w-1/2 gap-x-2 ">
                <div className="h-8 w-8">
                  <div className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 dark:bg-gray-100">
                    <img
                      src={theme ? DarkCheckMarkPath : CheckMarkPath}
                      alt=""
                      className="h-4 w-4"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium text-zinc-900 dark:text-gray-100">
                    Early 20s
                  </h1>
                  <h2 className="pt-1 text-sm font-light text-zinc-800 dark:text-gray-50">
                    Maybe Aiko don't hates me
                    {theme && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="transition-all duration-1000 dark:font-bold dark:text-red-500 "
                      >
                        {" "}
                        (yes, she does)
                      </motion.span>
                    )}{" "}
                    anymore and everything is gonna be perfect
                    {theme && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2 }}
                        className="transition-all duration-1000 dark:font-bold dark:text-red-500 "
                      >
                        {" "}
                        (I screwed up everything)
                      </motion.span>
                    )}{" "}
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex h-1/2 w-full ">
              <div className="h-full w-1/2 ">
                <h3 className="text-md font-light text-zinc-800 dark:text-gray-50">
                  Kagoshima
                </h3>
                <h4 className="text-sm font-extralight text-zinc-800 dark:text-gray-50">
                  2014-2015
                </h4>
              </div>
              <div className="flex h-full w-1/2 gap-x-2 ">
                <div className="">
                  <div className="z-10 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900 dark:bg-gray-100">
                    <img
                      src={theme ? DarkCheckMarkPath : CheckMarkPath}
                      alt=""
                      className="h-4 w-4"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-lg font-medium text-zinc-900 dark:text-gray-100">
                    Early 20s
                  </h1>
                  <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="pt-1 text-sm font-light text-zinc-800  dark:font-bold dark:text-red-600"
                  >
                    Oh god.
                  </motion.h2>
                </div>
              </div>
            </div>
            <hr className="absolute top-6 left-[211px]  h-28 w-0.5 border-l-[1px] border-dashed border-l-zinc-900 dark:border-l-gray-100"></hr>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myexperience;
