import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: { customers: [] },
  reducers: {
    getCustomers: (state, action) => {
      return {
        ...state,
        customers: action.payload,
      };
    },
    addCustomers: (state, action) => {
      localStorage.setItem("CusArray", [action.payload, ...state.customers]);
      return {
        ...state,
        customers: [action.payload, ...state.customers],
      };
    },
    updateCustomer: (state, action) => {
      const newData = state.customers?.map((itm) => {
        if (itm?.id == action.payload.id) {
          return {
            ...itm,
            first_name: action.payload.first_name,
            email: action.payload.email,
            id: action.payload.id,
          };
        }
        return itm;
      });
      localStorage.setItem("CusArray", newData);
      return {
        ...state,
        customers: newData,
      };
    },
    DeleteCustomer: (state, action) => {
      const newArr = state.customers.filter((x) => x.id != action.payload.id);
      localStorage.setItem("CusArray", newArr);
      return {
        ...state,
        customers: newArr,
      };
    },
  },
});

export const { getCustomers, updateCustomer, addCustomers, DeleteCustomer } =
  customerSlice.actions;
export const selectCustomer = (state) => state.customer.customers;

export default customerSlice.reducer;
