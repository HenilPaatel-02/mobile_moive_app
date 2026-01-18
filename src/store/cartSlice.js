import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      if (!Array.isArray(state.items)) {
        state.items = [];
      }

      const existingItem = state.items.find(
        (i) => i.id === item.id && i.size === item.size
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({
          ...item,
          qty: 1,
        });
      }
    },

    decreaseQty: (state, action) => {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.id === item.id && i.size === item.size
      );

      if (existingItem && existingItem.qty > 1) {
        existingItem.qty -= 1;
      }
    },

    removeFromCart: (state, action) => {
      const item = action.payload;

      state.items = state.items.filter(
        (i) => !(i.id === item.id && i.size === item.size)
      );
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, decreaseQty, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
