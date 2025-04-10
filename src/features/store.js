import { configureStore } from "@reduxjs/toolkit";

import alertSlice from "./alerts/alertSlice";
import listTodoSlice from "./Todo/listTodoSlice";

const store = configureStore({
  reducer: {
    listTodo: listTodoSlice,
    showAlert: alertSlice,
  },
});

export default store;
