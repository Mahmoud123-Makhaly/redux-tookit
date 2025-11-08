import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  text: string;
}

const initialState: CounterState = {
  value: 0,
  text: "Increment",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
   
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {  incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
