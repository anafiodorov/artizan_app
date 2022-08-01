import { createSlice } from '@reduxjs/toolkit';

const initialSizeState = {
  size: {
    32: false,
    34: false,
    36: false,
    38: false,
    40: false,
    42: false,
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
