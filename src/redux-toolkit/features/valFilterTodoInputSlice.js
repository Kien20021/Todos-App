import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};

const valFilterTodoInputSlice = createSlice({
  name: "valFilterTodoInput",
  initialState,
  reducers: {
    setValFilterTodoInput: (state, action) => {
      state[action.payload.name] = action.payload.value;
    },
  },
});

export const { setValFilterTodoInput } = valFilterTodoInputSlice.actions;
export default valFilterTodoInputSlice.reducer;
