import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/Counter/CounterSlice";
import { useDispatch } from "react-redux";
import { cartSlice } from "./features/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
