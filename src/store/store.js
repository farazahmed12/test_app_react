import { configureStore, combineReducers } from "@reduxjs/toolkit";
import customerReducer from "./customerSlice.js";
import { persistReducer, persistStore } from "redux-persist";

// import storage from "localforage"; // defaults to localStorage for web
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  customer: customerReducer,
  // Add other reducers here
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["customer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Add middleware, enhancers, etc. as needed
});

// export default store;
export const persistor = persistStore(store);
