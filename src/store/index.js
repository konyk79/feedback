import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./form";
// import authReducer from "./auth";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
