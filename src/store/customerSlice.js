import { createSlice } from "@reduxjs/toolkit";

export const customerSlice = createSlice({
  name: "customer",
  initialState: { customers: [] },
  reducers: {
    getCustomers: (state, action) => {
      console.log(action);
      return {
        ...state,
        customers: action.payload,
      };
    },
    addCustomers: (state, action) => {
      return {
        ...state,
        customers: [...action.payload, ...state.customers],
      };
    },
    DeleteCustomer: (state) => {},
  },
});

export const { getCustomers, addCustomers, DeleteCustomer } =
  customerSlice.actions;
export const selectCustomer = (state) => state.customer.customers;

export default customerSlice.reducer;
