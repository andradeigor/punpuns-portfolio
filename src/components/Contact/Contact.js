import PhonePath from "../../assets/phone.svg";
import MailPath from "../../assets/mail.svg";
import HousePath from "../../assets/house.svg";
import darkPhonePath from "../../assets/darkPhone.svg";
import darkMailPath from "../../assets/darkMail.svg";
import darkHousePath from "../../assets/darkHouse.svg";

const Contact = ({ theme }) => {
  return (
    <div
      id="contact"
      className="flex h-1/2 w-full items-center  justify-center px-64 transition-colors duration-500 ease-out dark:bg-zinc-900"
    >
      <div className="flex h-full w-5/6 flex-col   py-10">
        <div className=" mb-5 flex w-full flex-col ">
          <h1 className="mb-5 font-Inter text-4xl font-bold text-zinc-900 transition-colors  duration-500  ease-out dark:text-gray-100">
            GET IN TOUCH
          </h1>
          <div className="flex flex-col gap-3 ">
            <div className="h-0.5 w-12 rounded bg-zinc-900 transition-colors duration-500 ease-out dark:bg-gray-100" />
            <div className="h-0.5 w-24 rounded bg-zinc-900 transition-colors duration-500 ease-out dark:bg-gray-100" />
          </div>
        </div>
        <div className="  flex h-full w-full justify-evenly  ">
          <div className="h-full w-1/2 ">
            <div className="h-1/5 w-4/6 ">
              <h3 className="text-base font-normal text-zinc-800 transition-colors duration-500 ease-out dark:text-gray-50">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in auctor elit.
              </h3>
            </div>
            <div className="flex h-4/5 w-full flex-col justify-evenly ">
              <div className=" flex h-1/4 w-full gap-x-5 ">
                <div className="flex h-full items-center   ">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-zinc-900 transition-colors duration-500 ease-out dark:border-gray-100">
                    <img
                      src={theme ? darkPhonePath : PhonePath}
                      alt=""
                      className="h-2/3 w-2/3"
                    />
                  </div>
                </div>
                <div className="h-full w-5/6 ">
                  <h1 className="text-xl font-light text-zinc-800 transition-colors duration-500 ease-out dark:text-gray-50">
                    {" "}
                    Phone
                  </h1>
                  <p className="mt-2 text-base font-extralight text-zinc-800 transition-colors duration-500 ease-out dark:text-gray-50">
                    +81 6666-666
                  </p>
                </div>
              </div>
              <div className=" flex h-1/4 w-full gap-x-5 ">
                <div className="flex h-full items-center   ">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-zinc-900 transition-colors duration-500 ease-out dark:border-gray-100">
                    <img
                      src={theme ? darkMailPath : MailPath}
                      alt=""
                      className="h-2/3 w-2/3"
                    />
                  </div>
                </div>
                <div className="h-full w-5/6 ">
                  <h1 className="text-xl font-light text-zinc-800 transition-colors duration-500 ease-out dark:text-gray-50">
                    {" "}
                    Email
                  </h1>
                  <p className="mt-2 text-base font-extralight text-zinc-800 transition-colors duration-500 ease-out dark:text-gray-50">
                    PunPun@***.com
                  </p>
                </div>
              </div>
              <div className=" flex h-1/4 w-full gap-x-5 ">
                <div className="flex h-full items-center   ">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-zinc-900 transition-colors duration-500 ease-out dark:border-gray-100">
                    <img
                      src={theme ? darkHousePath : HousePath}
                      alt=""
                      className="h-2/3 w-2/3"
                    />
                  </div>
                </div>
                <div className="h-full w-5/6 ">
                  <h1 className="text-xl font-light text-zinc-800 transition-colors duration-500 ease-out dark:text-gray-50">
                    Location
                  </h1>
                  <p className="mt-2 text-base font-extralight text-zinc-800 transition-colors duration-500 ease-out dark:text-gray-50">
                    Kagoshima city, next to Urata Beach
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form className="h-full w-1/2 ">
            <div className="flex h-1/5 w-full gap-x-20 ">
              <div className="h-full w-1/2 ">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="flex h-4/6 w-full items-center justify-center pl-4 text-lg font-light text-zinc-800 shadow transition-colors duration-500  ease-out focus:shadow-md dark:border-gray-50/20 dark:bg-zinc-900 dark:text-gray-50 dark:shadow-zinc-800"
                />
              </div>
              <div className="h-full w-1/2 ">
                <input
                  type="text"
                  placeholder="Your Email"
                  className="flex h-4/6 w-full items-center justify-center pl-4 text-lg font-light text-zinc-800 shadow transition-colors duration-500  ease-out focus:shadow-md dark:border-gray-50/20 dark:bg-zinc-900 dark:text-gray-50 dark:shadow-zinc-800"
                />
              </div>
            </div>
            <div className="flex h-4/5 w-full flex-col justify-between ">
              <div className=" h-4/6 w-full ">
                <textarea
                  type="text"
                  placeholder="Your Message"
                  className="h-full w-full border-[1px] border-zinc-800/20 pt-4 pl-4 text-lg font-light text-zinc-800 shadow transition-colors duration-500  ease-out focus:shadow-md dark:border-gray-50/20 dark:bg-zinc-900 dark:text-gray-50 dark:shadow-zinc-800"
                />
              </div>
              <div className="flex h-14 w-full items-center ">
                <button className="h-5/6 w-1/3 rounded bg-zinc-800 font-Inter font-semibold text-white transition-colors duration-500 ease-out hover:bg-zinc-900 dark:text-gray-50">
                  {" "}
                  SEND MESSAGE
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
