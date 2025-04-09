import { createSlice } from "@reduxjs/toolkit";

const checkedItemSlice = createSlice({
  name: "checkedItem",
  initialState: [],
  reducers: {
    setToggleCheckedItem: (state, action) => {
      const id = action.payload;
      const index = state.indexOf(id);
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        state.push(id);
      }
    },
    setClearCheckedItems: () => {
      return [];
    },
  },
});

export const { setToggleCheckedItem, setClearCheckedItems } =
  checkedItemSlice.actions;
export default checkedItemSlice.reducer;
