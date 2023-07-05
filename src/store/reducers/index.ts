import { combineReducers } from "redux";
import { reduxStore } from "..";
import { booksReducer } from "./book/booksReducer";
import { notificationReducer } from "./notification/notificationReducer";

const rootReducer = combineReducers({
  books: booksReducer,
  notification: notificationReducer,
});

export type RootState = ReturnType<typeof reduxStore.getState>;

export default rootReducer;
