import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterFace = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterFace,
  reducers: {
    increment(state) {
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
