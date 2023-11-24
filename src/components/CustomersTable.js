import React, { useEffect, useState } from "react";
import CustomerPic from "../assets/customerPic.png";

const CustomersTable = () => {
  useEffect(() => {}, []);
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
            <tr class="  bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                class="px-6  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <img
                  src={CustomerPic}
                  alt="customer pic"
                  className="h-16 w-16 object-contain"
                />
              </th>
              <td class="px-6 py-4 ">0.00</td>
              <td class="px-6 py-4 text-[#57BC90] underline cursor-pointer capitalize ">
                abc123
              </td>
              <td class="px-6 py-4">abc@gmil.com</td>
              <td class="px-6 py-4 flex flex-row gap-x-3 justify-center mt-3 items-end">
                <button className="text-center bg-[#6fc7a1] px-3 rounded-md py-1 text-[#34614e] capitalize">
                  edit
                </button>
                <button className="text-center bg-[#d99898]  px-3 rounded-md py-1 text-[#D80000] capitalize">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomersTable;
