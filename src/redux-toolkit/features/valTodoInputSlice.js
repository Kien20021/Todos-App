import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

const valTodoInputSlice = createSlice({
  name: "valTodoInput",
  initialState,
  reducers: {
    setValTodoInput: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
    setClearVal: (state) => {
      state.title = "";
    },
  },
});

export const { setValTodoInput, setClearVal } = valTodoInputSlice.actions;
export default valTodoInputSlice.reducer;
