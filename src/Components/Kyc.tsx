import Header from "./Reusables/Header";
import React, { useState, ChangeEvent } from "react";

const Kyc = () => {
  const [businessName, setBusinessName] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [aboutBusiness, setAboutBusiness] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const maxCharacterLimit: number = 120; // Set the character limit here
  const limitCharacterCount = (input: HTMLInputElement, maxLength: number) => {
    const inputValue: string = input.value;
    if (inputValue.length > maxLength) {
      input.value = inputValue.slice(0, maxLength);
    }
  };

  const checkAllFieldsFilled = () => {
    if (
      businessName.trim() &&
      selectedIndustry &&
      aboutBusiness.trim() &&
      address.trim() &&
      city.trim() &&
      selectedState
    ) {
      setAllFieldsFilled(true);
    } else {
      setAllFieldsFilled(false);
    }
  };

  const handleBusinessNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBusinessName(e.target.value);
    checkAllFieldsFilled();
  };

  const handleSelectedIndustryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedIndustry(e.target.value);
    checkAllFieldsFilled();
  };

  const handleAboutBusinessChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    limitCharacterCount(e.target, maxCharacterLimit);
    setAboutBusiness(e.target.value);
    checkAllFieldsFilled();
  };

  const handleAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    checkAllFieldsFilled();
  };

  const handleCityChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
    checkAllFieldsFilled();
  };

  const handleSelectedStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    checkAllFieldsFilled();
  };
  return (
    <div className="">
      <Header />
      <div className=" my-4 mx-auto max-w-[500px] md:w-1/2 p-4">
        <form className="border px-4 w-auto py-2 shadow">
          <div className="flex flex-col items-center justify-center gap-1">
            <h1 className="text-center font-bold font-font text-[#2E2E3A] text-[20px] leading-6">
              Welcome James, Tell us about your company
            </h1>
            <p className="text-[12px] font-font leading-4 font-normal text-[#2E2E3A]">
              Enter appropriate and official information about your business
              below
            </p>
          </div>

          <div className="mt-4">
            <p className="text-[#2E2E3A] font-font font-bold text-[14px] text-left mt-2 ">
              What kind of business New Policy LLC?
            </p>
            <div className="grid grid-cols-2 grid-rows-2 gap-3 mt-2">
              <button className="bg-inherit text-black text-[12px] font-font border py-1 px-0.5 rounded hover:bg-[#b4cdeb]">
                Enterprise
              </button>
              <button className="bg-inherit text-black text-[12px] font-font border py-1 px-0.5 rounded hover:bg-[#b4cdeb]">
                Limited Liability
              </button>
              <button className="bg-inherit text-black text-[12px] font-font border py-1 px-0.5 rounded hover:bg-[#b4cdeb]">
                NGO
              </button>
              <button className="bg-inherit text-black text-[12px] font-font border py-1 px-0.5 rounded hover:bg-[#b4cdeb]">
                Patnership
              </button>
              <button className="bg-inherit text-black text-[12px] font-font border py-1 px-0.5 rounded hover:bg-[#b4cdeb]">
                Sole Proprietorship
              </button>
            </div>
          </div>

          <div className="flex flex-col mt-10">
            <div className="flex flex-col gap-1">
              <p className="text-[#2E2E3A] text-[14px] text-left font-font font-bold leading-4">
                What is your official business name?
              </p>
              <p className="text-[#2E2E3A] text-[12px] text-left font-font font-normal leading-3 max-w-[300px] md:w-[404px]">
                This must be the actual name on your official document. This
                info cannot be changed
              </p>
            </div>

            <div className="flex p-2 items-center border bg-[#F0F4F9] mt-2">
              <input
                className="outline-none w-full bg-inherit font-font"
                type="text"
                id="business-name"
                placeholder="Your business' name"
                value={businessName}
                required
                onChange={handleBusinessNameChange}
              />
            </div>
          </div>
          <hr className="mt-4" />

          <div className="flex flex-col mt-2">
            <div className="flex flex-col gap-1">
              <p className="text-[#2E2E3A] text-[14px] text-left font-font font-bold leading-4">
                Business Industry
              </p>
              <p className="text-[#2E2E3A] text-[12px] text-left font-font font-normal leading-3 max-w-[300px] md:w-[404px]">
                Choose the industry closest to the one in which your business
                operates
              </p>
            </div>

            <div className="flex p-2 items-center border bg-[#F0F4F9] mt-2">
              <select
                className="outline-none bg-inherit w-full font-font text-[15px] text-gray-400"
                id="industry"
                required
                value={selectedIndustry}
                onChange={handleSelectedIndustryChange}
              >
                <option value="">Select an industry</option>
                <option value="industry1">Banking & finance</option>
                <option value="industry2">Construction</option>
                <option value="industry3">Agriculture</option>
              </select>
            </div>
          </div>
          <hr className="mt-4" />

          <div className="flex flex-col mt-2">
            <div className="flex flex-col gap-1">
              <p className="text-[#2E2E3A] text-[14px] text-left font-font font-bold leading-4">
                Tell us about your business
              </p>
              <p className="text-[#2E2E3A] text-[12px] text-left font-font font-normal leading-3 max-w-[300px] md:w-[404px]">
                In few sentences, please describe your company and the products
                and/or services your offer
              </p>
            </div>

            <div className="flex p-2 h-[76px] items-center border bg-[#F0F4F9] mt-2">
              <input
                className="outline-none w-full  bg-inherit  font-font"
                type="text"
                id="about-business"
                placeholder="Business info and more..."
                value={aboutBusiness}
                required
                onChange={handleAboutBusinessChange}
              />
            </div>
            <div className="text-right text-[10px] text-gray-500">
              {aboutBusiness.length}/{maxCharacterLimit}
            </div>
          </div>
          <hr className="mt-4" />

          <div className="flex flex-col mt-2">
            <div className="flex flex-col gap-1">
              <p className="text-[#2E2E3A] text-[14px] text-left font-font font-bold leading-4">
                Verify your business locaition
              </p>
              <p className="text-[#2E2E3A] text-[12px] text-left font-font font-normal leading-3 max-w-[300px] md:w-[404px]">
                You will need to upload a copy of you utility bill associated to
                this address in the documentation part of the onboarding.
              </p>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="text"
                className="text-[14px] font-medium text-[grey] mt-2"
              >
                Address
              </label>
              <div className="flex p-2 items-center border bg-[#F0F4F9] mt-1">
                <input
                  className="outline-none w-full bg-inherit font-font"
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  value={address}
                  required
                  onChange={handleAddressChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="text"
                className="text-[14px] font-medium text-[grey] mt-2"
              >
                City
              </label>
              <div className="flex p-2 items-center border bg-[#F0F4F9] mt-1">
                <input
                  className="outline-none w-full bg-inherit font-font"
                  type="text"
                  id="address"
                  placeholder="Enter City"
                  value={city}
                  required
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-[14px] font-medium text-[grey] mt-2">
                State
              </label>
              <div className="flex p-2 items-center border bg-[#F0F4F9] mt-2">
                <select
                  className="outline-none bg-inherit w-full font-font text-[15px] text-gray-400"
                  id="state"
                  required
                  value={selectedState}
                  onChange={handleSelectedStateChange}
                >
                  <option value="">Select State</option>
                  <option value="state1">Lagos</option>
                  <option value="state2">Abuja</option>
                  <option value="state3">Kano</option>
                  <option value="state4">Edo</option>
                </select>
              </div>
            </div>
          </div>
          <button
            className={`active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 w-full mt-6 mb-3 rounded-l ${
              allFieldsFilled ? "bg-[#22297d]" : "bg-[#b4cdeb]"
            } text-white`}
          >
            SAVE AND CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Kyc;
