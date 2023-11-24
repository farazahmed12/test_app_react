import React from "react";

import Logo from "../assets/Logo.png";
import CustomerLogo from "../assets/customersicon.svg";
import CustomersTable from "./CustomersTable";

const Customers = () => {
  return (
    <div className="min-h-screen flex">
      {/* sidebar */}
      <div className="w-72 bg-[#015249] h-full flex flex-col justify-start items-center fixed top-0 left-0 bottom-0">
        <img className="w-32 h-32 object-contain" src={Logo} />

        <div className="bg-[#043933] cursor-pointer hover:scale-110 duration-150 rounded-md py-2 w-fit px-6 flex flex-row justify-between gap-x-3 items-center">
          <img src={CustomerLogo} className="w-5 h-5 object-contain" />
          <p className="text-md uppercase text-white font-semibold">
            Customers
          </p>
        </div>
      </div>

      {/* customers area */}
      <div className="w-full ml-72">
        <div className="w-full bg-white py-7 px-4">
          <p className="text-2xl uppercase text-black font-bold">Customers</p>
        </div>

        <div className="bg-[#F3F3F3] w-full h-full px-4">
          <div className="w-fit rounded-md text-white bg-from-[#57BC90] to-[#004B40] ">
            sdadas
          </div>
        </div>
        <CustomersTable />
      </div>
    </div>
  );
};

export default Customers;
