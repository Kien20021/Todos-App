import { configureStore } from "@reduxjs/toolkit";
import valTodoInputSlice from "./features/valTodoInputSlice";
import valFilterTodoInputSlice from "./features/valFilterTodoInputSlice";
import listTodoSlice from "./features/listTodoSlice";
import alertSlice from "./features/alertSlice";
import inforAlertSlice from "./features/inforAlertSlice";
import checkedItemSlice from "./features/checkedItemSlice";
import openDialogEditSlice from "./features/openDialogEditSlice";
import openDialogDeleteSlice from "./features/openDialogDeleteSlice";
import checkStatusSlice from "./features/checkStatusSlice";
const store = configureStore({
  reducer: {
    valTodoInput: valTodoInputSlice,
    valFilterTodoInput: valFilterTodoInputSlice,
    listTodo: listTodoSlice,
    showAlert: alertSlice,
    inforAlert: inforAlertSlice,
    checkedItem: checkedItemSlice,
    openDialogEdit: openDialogEditSlice,
    openDialogDelete: openDialogDeleteSlice,
    checkStatus: checkStatusSlice,
  },
});

export default store;
