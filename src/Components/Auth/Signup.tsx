import { useState, ChangeEvent } from "react";
import SideBg from "./SideBg";
import { FaCreativeCommonsNd } from "react-icons/fa";
import { GiPadlock } from "react-icons/gi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className="flex">
        <SideBg />

        <div className=" items-center mx-auto max-w-[500px] md:w-1/2 p-4">
          <span className="text-right">
            <p className="font-bold font-font mb-2 hover:cursor-pointer">
              Login
            </p>
          </span>
          <form className="border px-4 w-auto py-2 shadow">
            <h1 className="text-left font-bold font-font mb-3">Get Started</h1>
            <div className="flex gap-5 mb-2">
              <div className="flex flex-col">
                <label
                  htmlFor="text"
                  className="text-[14px] font-medium text-[grey] mb-2"
                >
                  First Name
                </label>
                <div className="flex p-2 items-center border bg-[#F0F4F9] gap-3">
                  <input
                    className="outline-none w-full bg-inherit font-font"
                    type="text"
                    id="first-name"
                    placeholder="Your first Name"
                    value={firstName}
                    required
                    onChange={handleFirstNameChange}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="text"
                  className="text-[14px] font-medium text-[grey] mb-2"
                >
                  Last Name
                </label>
                <div className="flex p-2 items-center border bg-[#F0F4F9] gap-3">
                  <input
                    className="outline-none w-full bg-inherit font-font"
                    type="text"
                    id="last-name"
                    placeholder="Your last Name"
                    value={lastName}
                    required
                    onChange={handleLastNameChange}
                  />
                </div>
              </div>
            </div>
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
            <div className="flex flex-col mt-2">
              <label
                htmlFor="tel"
                className="text-[14px] font-medium text-[grey] mb-2"
              >
                Phone number
              </label>
              <div className="flex p-2 items-center border bg-[#F0F4F9] gap-3">
                <LiaFlagUsaSolid
                  size={20}
                  className="text-[grey] border-r border-r-[grey] pr-1"
                />
                <input
                  className="outline-none w-full bg-inherit font-font"
                  type="tel"
                  id="phone-number"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  required
                  onChange={handlePhoneNumberChange}
                />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <label
                htmlFor="password"
                className="text-[14px] font-medium text-[grey] mb-2"
              >
                Enter password
              </label>
              <div className="flex p-2 items-center border bg-[#F0F4F9] gap-3">
                <GiPadlock
                  size={20}
                  className="text-[grey] border-r border-r-[grey] pr-1"
                />
                <input
                  className="outline-none bg-inherit w-full font-font"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={handlePasswordChange}
                />
                <AiOutlineEyeInvisible />
              </div>
            </div>
            <div className="border-b border-b-[#d7d1d1] mt-4" />
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-center items-center">
                <input type="checkbox" id="remember" />
                <label
                  className="ml-2 font-font text-[12px]"
                  htmlFor="remember"
                >
                  I have read, understood and I agree to Sampay’s Privacy
                  Policy, and Terms and conditions.
                </label>
              </div>

              <div className="flex justify-center items-center">
                <input type="checkbox" id="remember" />
                <label
                  className="ml-2 font-font text-[12px]"
                  htmlFor="remember"
                >
                  Join Sampay business community for exclusive access to
                  business resources and events to help you grow
                </label>
              </div>
            </div>

            <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2  w-full mt-4 rounded-l bg-blue-400 text-white txt-lg font-bold">
              CREATE ACCOUNT
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

export default Signup;
