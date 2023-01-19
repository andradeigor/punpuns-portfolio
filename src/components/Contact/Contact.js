import PhonePath from "../../assets/phone.svg";
import MailPath from "../../assets/mail.svg";
import HousePath from "../../assets/house.svg";

const Contact = () => {
  return (
    <div className="flex h-1/2 w-full items-center  justify-center px-64">
      <div className="flex h-full w-5/6 flex-col   py-10">
        <div className=" mb-5 flex w-full flex-col ">
          <h1 className="mb-5 font-Inter text-4xl font-bold">GET IN TOUCH</h1>
          <div className="flex flex-col gap-3 ">
            <div className="h-0.5 w-12 rounded bg-zinc-900" />
            <div className="h-0.5 w-24 rounded bg-zinc-900" />
          </div>
        </div>
        <div className="  flex h-full w-full justify-evenly  ">
          <div className="h-full w-1/2 ">
            <div className="h-1/5 w-4/6 ">
              <h3 className="text-base font-normal text-zinc-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                in auctor elit.
              </h3>
            </div>
            <div className="flex h-4/5 w-full flex-col justify-evenly ">
              <div className=" flex h-1/4 w-full gap-x-5 ">
                <div className="flex h-full items-center   ">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-zinc-900">
                    <img src={PhonePath} alt="" className="h-2/3 w-2/3" />
                  </div>
                </div>
                <div className="h-full w-5/6 ">
                  <h1 className="text-xl font-light text-zinc-800"> Phone</h1>
                  <p className="mt-2 text-base font-extralight text-zinc-800">
                    +81 6666-666
                  </p>
                </div>
              </div>
              <div className=" flex h-1/4 w-full gap-x-5 ">
                <div className="flex h-full items-center   ">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-zinc-900">
                    <img src={MailPath} alt="" className="h-2/3 w-2/3" />
                  </div>
                </div>
                <div className="h-full w-5/6 ">
                  <h1 className="text-xl font-light text-zinc-800"> Email</h1>
                  <p className="mt-2 text-base font-extralight text-zinc-800">
                    PunPun@***.com
                  </p>
                </div>
              </div>
              <div className=" flex h-1/4 w-full gap-x-5 ">
                <div className="flex h-full items-center   ">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-zinc-900">
                    <img src={HousePath} alt="" className="h-2/3 w-2/3" />
                  </div>
                </div>
                <div className="h-full w-5/6 ">
                  <h1 className="text-xl font-light text-zinc-800">Location</h1>
                  <p className="mt-2 text-base font-extralight text-zinc-800">
                    Kagoshima city, next to Urata Beach
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-1/2 bg-blue-200"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
