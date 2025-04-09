import { createSlice } from "@reduxjs/toolkit";
const openDialogDeleteSlice = createSlice({
  name: " openDialogDelete",
  initialState: {
    isOpen: false,
  },
  reducers: {
    setOpenDialogDelete: (state) => {
      state.isOpen = true;
    },
    setCloseDialogDelete: (state) => {
      state.isOpen = false;
    },
  },
});

export const { setOpenDialogDelete, setCloseDialogDelete } =
  openDialogDeleteSlice.actions;
export default openDialogDeleteSlice.reducer;
