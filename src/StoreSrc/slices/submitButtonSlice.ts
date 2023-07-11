import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface IButtonState {
  display: boolean;
}

const initialState: IButtonState = {
  display: false,
};

//STATE SLICES
//slice for user edit button
export const submitButtonSlice = createSlice({
  name: "submitButtonSlice",
  initialState,
  reducers: {
    toggle: (state) => {
      state.display = !state.display;
    },
    // Purge: (state, action) => {
    //   return initialState;
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => {
      return initialState;
    });
  },
});

//Export actions for edit button
export const { toggle } = submitButtonSlice.actions;
