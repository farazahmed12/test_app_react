import React, { useEffect, useState } from "react";
import axios from "axios";
import Logo from "../assets/Logo.png";
import CustomerLogo from "../assets/customersicon.svg";
import CustomersTable from "./CustomersTable";
import AddNewModal from "./AddNewModal";

const Customers = () => {
  const [data, setData] = useState();
  const getCustomers = () => {
    axios
      .get(`https://reqres.in/api/users?page=1`)
      .then((res) => {
        console.log(res);
        setData(res?.data?.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="min-h-screen flex relative">
      {/* sidebar */}
      <div className="w-56 bg-[#015249] h-full flex flex-col justify-start items-center fixed top-0 left-0 bottom-0">
        <img
          className="w-32 h-32 object-contain"
          src={Logo}
          alt="logo for website "
        />

        <div className="bg-[#043933] cursor-pointer hover:scale-110 duration-150 rounded-md py-2 w-fit px-6 flex flex-row justify-between gap-x-3 items-center">
          <img
            src={CustomerLogo}
            className="w-5 h-5 object-contain"
            alt="customer logo"
          />
          <p className="text-md uppercase text-white  font-semibold">
            Customers
          </p>
        </div>
      </div>

      {/* customers area */}
      <div className="w-full ml-56">
        <div className="w-full bg-white py-7 px-4">
          <p className="text-2xl uppercase text-black font-bold">Customers</p>
        </div>

        <div className="bg-[#F3F3F3] pt-10 w-full h-full px-4">
          <div className="w-fit flex flex-row justify-center items-center py-2 px-4 gap-x-2 rounded-md text-white bg-gradient-to-r from-[#57BC90] to-[#004B40] ">
            <p className="text-white ">+</p>
            <p className="text-sm uppercase text-white font-normal">
              Add Customers
            </p>
          </div>
          <CustomersTable data={data} />
        </div>
      </div>

      <AddNewModal modalVisible={true} />
    </div>
  );
};

export default Customers;
