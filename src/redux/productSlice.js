import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  isLoading: true,
  isError: false,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.data = action.payload.data || [];
      state.isLoading = action.payload.isLoading;
      state.isError = action.payload.isError;
    },
  },
});

export const { updateData } = productSlice.actions;

export default productSlice.reducer;
