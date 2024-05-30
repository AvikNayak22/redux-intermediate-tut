import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface cartSliceType {
  cartItems: EcomItem[];
}

const initialState: cartSliceType = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<EcomItem>) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
