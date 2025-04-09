import { createSlice } from "@reduxjs/toolkit";

const checkStatusSlice = createSlice({
  name: "checkStatus",
  initialState: {
    checkedItems: {},
  },
  reducers: {
    setToggleCheckStatus: (state, action) => {
      const id = action.payload;
      state.checkedItems[id] = !state.checkedItems[id];
    },
  },
});

export const { setToggleCheckStatus } = checkStatusSlice.actions;
export default checkStatusSlice.reducer;
