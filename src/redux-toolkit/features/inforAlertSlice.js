import { createSlice } from "@reduxjs/toolkit";

const inforAlertSlice = createSlice({
  name: " inforAlert",
  initialState: {
    infor: {},
  },
  reducers: {
    setInforAlert: (state, action) => {
      state.infor = action.payload;
    },
  },
});

export const { setInforAlert } = inforAlertSlice.actions;
export default inforAlertSlice.reducer;
