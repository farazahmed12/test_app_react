import React, { useEffect, useState } from "react";
import CustomerPic from "../assets/customerPic.png";
import { useSelector } from "react-redux";

const CustomersTable = ({}) => {
  const customers = useSelector((state) => state.customer.customers);

  return (
    <div>
      <div class="relative overflow-x-auto py-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs mb-5 bg-[#6fc7a1]  text-[#015249] uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th scope="col" class="px-6 py-3 rounded-l-lg"></th>
              <th scope="col" class="px-6 py-3">
                Customer ID
              </th>
              <th scope="col" class="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" class="px-6 py-3">
                Customer Email
              </th>
              <th scope="col" class="px-6 py-3 rounded-r-lg"></th>
            </tr>
          </thead>
          <tbody>
            {customers?.map((item, i) => {
              return (
                <tr class="  bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    <img
                      src={item?.avatar || CustomerPic}
                      alt="customer pic"
                      className="h-16 w-16 object-contain rounded-md"
                    />
                  </th>
                  <td class="px-6 py-4 ">{item?.Id || "0102"}</td>
                  <td class="px-6 py-4 text-[#57BC90] underline cursor-pointer capitalize ">
                    {item?.first_name + " " + item?.last_name || "John Doe"}{" "}
                  </td>
                  <td class="px-6 py-4">
                    {item?.email || "johndoe@gmail.com"}
                  </td>
                  <td class="px-6 py-4 flex flex-row gap-x-3 justify-center mt-3 items-end">
                    <button className="text-center bg-[#6fc7a1] px-3 rounded-md py-1 text-[#34614e] capitalize">
                      edit
                    </button>
                    <button className="text-center bg-[#d99898]  px-3 rounded-md py-1 text-[#D80000] capitalize">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTable;
