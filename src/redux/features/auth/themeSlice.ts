import { RootState } from "./../../store";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toogleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});
export const { toogleTheme } = themeSlice.actions;
export const toogleThemes = (state: RootState) => state.theme.darkMode;
export default themeSlice.reducer;
