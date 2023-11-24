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
      return {
        ...state,
        customers: [action.payload, ...state.customers],
      };
    },
    updateCustomer: (state, action) => {
      console.log(action);

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
      return {
        ...state,
        customers: newData,
      };
    },
    DeleteCustomer: (state) => {},
  },
});

export const { getCustomers, updateCustomer, addCustomers, DeleteCustomer } =
  customerSlice.actions;
export const selectCustomer = (state) => state.customer.customers;

export default customerSlice.reducer;
