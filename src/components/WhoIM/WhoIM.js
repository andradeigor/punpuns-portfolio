import wppPath from "../../assets/wpp.png";
import wppDarkPath from "../../assets/darkWpp.png";
import { motion, AnimatePresence } from "framer-motion";

const WhoIM = ({ theme }) => {
  const helloQuote = "HELLO, MY NAME IS:";
  const nameQuote = "Punpun Onodera";
  const aboutQuote = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                      in auctor elit. Aenean sed arcu commodo, venenatis justo a,
                      rhoncus nibh. Donec sed ex luctus, hendrerit massa id, interdum
                      quam. Nunc vehicula mi quis massa volutpat fermentum. Nam purus
                      neque, vulputate at varius in, tempor sed dui. Aenean at turpis
                      nisl. `;
  const setence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

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
            <AnimatePresence>
              <motion.h2
                exit="hidden"
                variants={setence}
                initial="hidden"
                animate="visible"
                className=" text-2xl font-medium text-zinc-800 dark:text-gray-50"
              >
                {helloQuote.split("").map((caracter, index) => {
                  return (
                    <motion.span key={caracter + "-" + index} variants={letter}>
                      {caracter}
                    </motion.span>
                  );
                })}
              </motion.h2>
              <motion.h1
                exit="hidden"
                variants={setence}
                initial="hidden"
                animate="visible"
                className=" text-5xl font-bold text-zinc-900 dark:text-gray-100"
              >
                {nameQuote.split("").map((caracter, index) => {
                  return (
                    <motion.span key={caracter + "-" + index} variants={letter}>
                      {caracter}
                    </motion.span>
                  );
                })}
              </motion.h1>
              <motion.h3
                exit="hidden"
                variants={setence}
                initial="hidden"
                animate="visible"
                className="font-regular  text-2xl text-zinc-800 dark:text-gray-50"
              >
                {aboutQuote.split("\n").map((caracter, index) => {
                  return (
                    <motion.span key={caracter + "-" + index} variants={letter}>
                      {caracter}
                    </motion.span>
                  );
                })}
                {theme && (
                  <motion.span
                    variants={letter}
                    transition={{ duration: 0.8 }}
                    className="text-2xl font-bold text-red-500"
                  >
                    It's my fault
                  </motion.span>
                )}
              </motion.h3>
            </AnimatePresence>
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
