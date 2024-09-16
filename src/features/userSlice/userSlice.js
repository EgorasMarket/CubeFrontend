import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  details: {},
  bank_details: {},
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },

    setBankDetails: (state, action) => {
      state.bank_details = action.payload;
    },
    updateBankDetails: (state, action) => {
      state.bank_details = action.payload;
    },
  },
});

export const { setBankDetails, setDetails, updateBankDetails } =
  UserSlice.actions;

export default UserSlice.reducer;
