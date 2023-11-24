import React from "react";
import Bin from "../assets/bin.png";
import { useDispatch } from "react-redux";
import { DeleteCustomer } from "../store/customerSlice";
import { toast, ToastContainer } from "react-toastify";

function DeleteModal({
  setModalVisible,
  modalVisible,

  setDeleteItem,
  deleteItem,
  handleDeleteItem,
}) {
  const dispatch = useDispatch();
  return (
    <div
      className={`${
        !modalVisible ? "hidden" : "flex  flex-col"
      }  fixed  items-center justify-center p-10 inset-0 w-full h-full bg-[rgba(0,0,0,0.5)]`}
    >
      <div className=" flex flex-col relative bg-white rounded-lg p-5 w-full md:w-5/12 h-72 overflow-y-auto  ">
        <div className="absolute top-2 right-2">
          <div
            className=" bg-black text-white px-3 mb-2 rounded cursor-pointer"
            onClick={() => {
              setModalVisible(!modalVisible);
              setDeleteItem([]);
            }}
          >
            x
          </div>
        </div>

        <div className="flex flex-col justify-start  items-center">
          <img src={Bin} className="w-14 h-14 object-contain" />
          <h6 className="uppercase font-semibold text-gray-700 text-xl text-center sm:text-xl my-3">
            Are you sure ?
          </h6>

          <p className="text-gray-500 text-sm font-semibold text-center">
            Do you really want to delete this customer? This process can not be
            undone.
          </p>

          <div className="flex flex-row justify-cneter items-center gap-x-8 mt-8">
            <button
              onClick={() => {
                setModalVisible(!modalVisible);
                setDeleteItem([]);
              }}
              className="px-5 py-1 font-semibold rounded-md bg-gray-500 text-gray-100 uppercase"
            >
              cancel
            </button>
            <button
              onClick={() => {
                dispatch(DeleteCustomer(deleteItem));
                setModalVisible(!modalVisible);
                setDeleteItem([]);
                toast.success("Customer Delete SuccessFully", {
                  autoClose: 2500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,

                  theme: "light",
                });
              }}
              className="px-5 py-1 font-semibold rounded-md bg-[#D80000] text-gray-100 uppercase"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
