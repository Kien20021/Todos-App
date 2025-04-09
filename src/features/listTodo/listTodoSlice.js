import { createSlice } from "@reduxjs/toolkit";

const listTodoSlice = createSlice({
  name: "listTodo",
  initialState: {
    data: [],
  },
  reducers: {
    setListTodo: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setListTodo } = listTodoSlice.actions;
export default listTodoSlice.reducer;
