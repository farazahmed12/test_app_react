import React, { useEffect, useState } from "react";
import CustomerPic from "../assets/customerPic.png";
import { useDispatch, useSelector } from "react-redux";
import { getCustomers } from "../store/customerSlice";
import ArrowUp from "../assets/uparrow.png";

const CustomersTable = ({
  setEdit,
  setSelecteditem,
  setModalVisible,
  setDeleteItem,
  setDeleteModal,
  page,
  setPage,
  totalPages,
}) => {
  const dispatch = useDispatch();
  const customers = useSelector((state) => state.customer.customers);
  const [asc, setasc] = useState(true);

  const handleSort = () => {
    if (asc) {
      setasc(!asc);
      const newArr = [...customers]?.sort((a, b) => {
        return a.first_name.localeCompare(b.first_name);
      });
      dispatch(getCustomers(newArr));
    } else {
      setasc(!asc);
      const newArr = [...customers]?.sort((a, b) => {
        return b.first_name.localeCompare(a.first_name);
      });
      dispatch(getCustomers(newArr));
    }
  };

  useEffect(() => {}, [asc]);

  return (
    <div>
      <div class="relative overflow-x-auto py-10">
        {customers?.length > 0 ? (
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs mb-5 bg-[#6fc7a1] text-[#015249] uppercase  dark:bg-gray-700 dark:text-gray-400">
              <tr className="">
                <th scope="col" class="px-6 py-3 rounded-l-lg"></th>
                <th
                  scope="col"
                  class="px-6 flex flex-row items-center py-3 cursor-pointer"
                  onClick={() => handleSort()}
                >
                  Customer ID{" "}
                  <img
                    src={ArrowUp}
                    className={`h-2 w-2 object-contain ${asc && "rotate-180"}`}
                  />
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
                    <td class="px-6 py-4 ">{item?.id || "0102"}</td>
                    <td class="px-6 py-4 text-[#57BC90] underline cursor-pointer capitalize ">
                      {item?.first_name || "John Doe"}
                    </td>
                    <td class="px-6 py-4">
                      {item?.email || "johndoe@gmail.com"}
                    </td>
                    <td class="px-6 py-4 flex flex-row gap-x-3 justify-center mt-3 items-end">
                      <button
                        onClick={() => {
                          setEdit(true);
                          setSelecteditem(item);
                          setModalVisible();
                        }}
                        className="text-center bg-[#6fc7a1] px-3 rounded-md py-1 text-[#34614e] capitalize"
                      >
                        edit
                      </button>
                      <button
                        onClick={() => {
                          setDeleteItem(item);
                          setDeleteModal(true);
                        }}
                        className="text-center bg-[#d99898]  px-3 rounded-md py-1 text-[#D80000] capitalize"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h3 className="text-md text-gray-600">No Customers Found</h3>
        )}

        <div className="w-full mt-4 flex flex-row justify-end space-x-4 items-center">
          <p className="mr-5 text-gray-500 text-sm">
            Page {page} of {totalPages}
          </p>
          {page > 1 && (
            <button
              onClick={() => {
                if (page == 1) {
                  setPage(1);
                } else {
                  setPage((page -= 1));
                }
              }}
              className="px-3 rounded bg-[#6fc7a1]"
            >
              Previous
            </button>
          )}
          {totalPages > page && (
            <button
              onClick={() => {
                setPage(page + 1);
              }}
              className="px-3 rounded bg-[#6fc7a1]"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomersTable;
