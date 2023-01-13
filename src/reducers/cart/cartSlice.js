import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalCount: 0,
  productList: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.productList = [...state.productList, action.payload];
      state.totalCount += 1;
    },

    removeProductFromCart: (state, action) => {
      state.totalCount -= 1;
      state.productList = state.productList.filter((elem) => {
        return action.payload !== elem.id;
      });
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
