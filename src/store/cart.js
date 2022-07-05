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
      action.payload.cartId =
        action.payload.id +
        (action.payload.size ? '_' + action.payload.size : '');

      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.cartId === action.payload.cartId
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
    removeItem(state, action) {
      action.payload.cartId =
        action.payload.id +
        (action.payload.size ? '_' + action.payload.size : '');

      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.cartId === action.payload.cartId
      );
      const existingItem = state.cartItems[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.cartItems.filter(
          (item) => item.cartId == action.payload.cartId
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.cartItems];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      state.cartItems = updatedItems;
      state.totalAmount = updatedTotalAmount;
      state.itemsCount = state.itemsCount - action.payload.amount;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
