import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {}, // { [id]: quantity }
    totalCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload?.id;
      if (!id) return;
      const qty = state.items[id] || 0;
      state.items[id] = qty + 1;
      state.totalCount = Object.values(state.items).reduce((s, v) => s + v, 0);
    },
    removeFromCart: (state, action) => {
      const id = action.payload?.id;
      if (!id) return;
      const qty = state.items[id] || 0;
      if (qty <= 1) delete state.items[id];
      else state.items[id] = qty - 1;
      state.totalCount = Object.values(state.items).reduce((s, v) => s + v, 0);
    },
    clearCart: (state) => {
      state.items = {};
      state.totalCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
