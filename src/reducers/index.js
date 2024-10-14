import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    increase(state) {
      state.counter += 2;
    },
    set(state, action) {
      state.counter = action.payload;
    },
    reset(state) {
      state.counter = 0;
    },
  },
});

export default counterSlice;
