import { createSlice } from "@reduxjs/toolkit";

// load từ localStorage
const loadCart = () => {
  const data = localStorage.getItem("cart");
  return data ? JSON.parse(data) : [];
};

// save vào localStorage
const saveCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: loadCart(),
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(i => i.id === item.id);

      if (exist) {
        exist.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      saveCart(state.items);
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload);
      saveCart(state.items);
    },

    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
      saveCart(state.items);
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      saveCart(state.items);
    }
  }
});

export const { addItem, removeItem, increaseQty, decreaseQty } = cartSlice.actions;
export default cartSlice.reducer;