import { configureStore } from "@reduxjs/toolkit";

import alertSlice from "./alerts/alertSlice";
import TodoSlice from "./Todo/TodoSlice";

const store = configureStore({
  reducer: {
    Todo: TodoSlice,
    showAlert: alertSlice,
  },
});

export default store;
