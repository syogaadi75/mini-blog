import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const detailSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    saveDetail: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveDetail } = detailSlice.actions;

export default detailSlice.reducer;
