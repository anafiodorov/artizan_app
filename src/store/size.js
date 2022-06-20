import { createSlice } from '@reduxjs/toolkit';

const initialSizeState = {
  size: {
    S32: false,
    S34: false,
    S36: false,
    S38: false,
    S40: false,
    S42: false,
    XS: false,
    S: false,
    M: false,
    L: false,
    XL: false,
    XXL: false,
  },
};

const sizeSlice = createSlice({
  name: 'size',
  initialState: initialSizeState,
  reducers: {
    addSize(state, action) {
      state.size = {
        ...state.size,
        [action.payload.name]: action.payload.value,
      };
    },
  },
});

export const sizeActions = sizeSlice.actions;
export default sizeSlice.reducer;
