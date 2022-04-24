import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cartItems: [],
  totalAmount: 0,
  itemsCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addToCart(state, action) {
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.cartItems.concat(action.payload);
      }

      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      state.cartItems = updatedItems;
      state.totalAmount = updatedTotalAmount;
      state.itemsCount = state.itemsCount + action.payload.amount;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
