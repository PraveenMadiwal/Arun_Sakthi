import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enquiries: [],
};

const enquirySlice = createSlice({
  name: "enquiries",
  initialState,
  reducers: {
    addEnquiry: (state, action) => {
      state.enquiries.push(action.payload);
    },

    setEnquiries: (state, action) => {
      state.enquiries = action.payload;
    },
  },
});

export const { addEnquiry, setEnquiries } = enquirySlice.actions;
export default enquirySlice.reducer;