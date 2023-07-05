import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import rootReducer, { RootState } from "./reducers";

export const reduxStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof reduxStore.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
