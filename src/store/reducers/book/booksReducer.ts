import { AnyAction, Reducer } from "redux";
import { Book } from "../../../services/api/api";

const initialState: { books: Book[] } = {
  books: [],
};

export const booksReducer: Reducer<typeof initialState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SET_BOOKS":
      return {
        ...state,
        books: action.payload.books,
      };
    default:
      return state;
  }
};
