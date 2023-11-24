import React from "react";
// import { toast, ToastContainer } from "react-toastify";

function AddNewModal({
  setModalVisible,
  modalVisible,
  setDeleteItem,
  deleteItem,
  handleDeleteItem,
  name,
}) {
  return (
    <div
      className={`${
        !modalVisible ? "hidden" : "flex  flex-col"
      }  fixed  items-center justify-center p-10 inset-0 w-full h-full bg-[rgba(0,0,0,0.5)]`}
    >
      <div className=" flex flex-col relative bg-white rounded-lg w-full md:w-5/12 h-fit overflow-y-auto  ">
        <div className="absolute top-2 right-2">
          <div
            className="  text-white px-3 mb-2 rounded cursor-pointer"
            onClick={() => {
              setModalVisible(!modalVisible);
              setDeleteItem([]);
            }}
          >
            x
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#57BC90] to-[#004B40] flex justify-center items-center py-8">
          <h2 className="text-white text-lg  font-semibold ">
            Add New Customer
          </h2>
        </div>

        <div className="flex flex-col mt-10 items-center justify-center ">
          <div className="w-8/12 ">
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Customer Name
            </label>
            <input
              placeholder="Customer Name"
              type="text"
              id="small-input"
              class="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="w-8/12 mt-3">
            <label
              for="small-input"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              placeholder="Email"
              type="email"
              id="small-input"
              class="block w-full p-2  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="flex text-white py-2 rounded-md cursor-pointer bg-gradient-to-r from-[#57BC90] to-[#004B40]  flex-row justify-center w-8/12 mt-6 mb-10">
            Add Customer
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewModal;
