import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    addProduct: (state, action) => {
      state.products.push(action.payload);
    },

    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    updateProduct: (state, action) => {
  state.products = state.products.map((product) =>
    product.id === action.payload.id
      ? action.payload
      : product
  );
},
  },
});

export const {
  setProducts,
  addProduct,
  deleteProduct,
  updateProduct,
} = productSlice.actions;

export default productSlice.reducer;