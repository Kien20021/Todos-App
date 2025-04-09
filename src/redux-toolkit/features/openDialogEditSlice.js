import { createSlice } from "@reduxjs/toolkit";
const openDialogEditSlice = createSlice({
  name: " openDialogEdit",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOpenDialogEdit: (state) => {
      state.isOpen = true;
    },
    setCloseDialogEdit: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setOpenDialogEdit, setCloseDialogEdit } =
  openDialogEditSlice.actions;
export default openDialogEditSlice.reducer;
