import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IProduct } from "../../../interfaces";
import { itemIsFoundInCartItems } from "../../../utils/Functions";

export interface IProducts {
  cartItems: IProduct[];
}

const initialState: IProducts = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.cartItems = itemIsFoundInCartItems(state.cartItems, action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
