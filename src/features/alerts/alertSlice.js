import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "showAlert",
  initialState: {
    showAlert: false,
  },
  reducers: {
    setOnShowAlerts: (state) => {
      state.showAlert = true;
    },
    setOffShowAlerts: (state) => {
      state.showAlert = false;
    },
  },
});

export const { setOnShowAlerts, setOffShowAlerts } = alertSlice.actions;
export default alertSlice.reducer;
