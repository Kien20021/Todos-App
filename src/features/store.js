import { configureStore } from "@reduxjs/toolkit";

import listTodoSlice from "./listTodo/listTodoSlice";
import alertSlice from "./alerts/alertSlice";

const store = configureStore({
  reducer: {
    listTodo: listTodoSlice,
    showAlert: alertSlice,
  },
});

export default store;
