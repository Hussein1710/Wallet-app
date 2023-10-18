import { useState, ChangeEvent } from "react";
import { FaCreativeCommonsNd } from "react-icons/fa";
import SideBg from "./SideBg";

const RecoverPassword = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <div className="flex">
        <SideBg />
        <div className=" items-center my-9 mx-auto max-w-[500px] md:w-1/2 p-4">
          <span className="text-right">
            <p className="font-bold font-font mb-2 hover:cursor-pointer">
              Back
            </p>
          </span>
          <form className="border px-4 w-auto py-2 shadow">
            <h1 className="text-left font-bold font-font mb-3">
              Recover Password
            </h1>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-[14px] font-medium text-[grey] mb-2"
              >
                Email Address
              </label>
              <div className="flex p-2 items-center border bg-[#F0F4F9] gap-3">
                <FaCreativeCommonsNd
                  size={20}
                  className="text-[grey] border-r border-r-[grey] pr-1"
                />
                <input
                  className="outline-none w-full bg-inherit font-font"
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  value={email}
                  required
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div className="border-b border-b-[#d7d1d1] mt-4"/>
            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2  w-full mt-4 rounded-l bg-blue-400 text-white txt-lg font-bold">
              CONTINUE
            </button>
            <div className="flex flex-col  h-[100px] bg-[#2488FF0D] justify-center items-center gap-1 mt-6 my-3 mx-5">
              <p className="font-font leading-4 text-[12px] font-normal">
                Having problems logging in?
              </p>
              <p className="text-[#0071F2] leading-4 text-[12px] font-font font-bold hover:cursor-pointer">
                Chat with us
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
