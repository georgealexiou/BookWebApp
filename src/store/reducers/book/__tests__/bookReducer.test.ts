import { booksReducer } from "../booksReducer";

describe("booksReducer", () => {
  const initialState = {
    books: [
      {
        book_author: ["Initial Author"],
        book_publication_city: "Initial City",
        book_publication_country: "Initial Country",
        book_publication_year: "Initial Year",
        book_pages: 1,
        book_title: "Initial Title",
        id: 1,
      },
    ],
  };

  it("should handle SET_BOOKS action", () => {
    const books = [
      {
        book_author: ["John Doe"],
        book_publication_city: "New York",
        book_publication_country: "United States",
        book_publication_year: "2022",
        book_pages: 350,
        book_title: "The Great Novel",
        id: 1,
      },
      {
        book_author: ["Jane Smith"],
        book_publication_city: "London",
        book_publication_country: "United Kingdom",
        book_publication_year: "2021",
        book_pages: 250,
        book_title: "The Adventure Begins",
        id: 2,
      },
    ];

    const setBooksAction = {
      type: "SET_BOOKS",
      payload: {
        books: books,
      },
    };

    const newState = booksReducer(initialState, setBooksAction);

    expect(newState.books).toEqual(books);
  });

  it("should not update the state for an unknown action", () => {
    const action = {
      type: "UNKNOWN_ACTION",
      payload: {
        book_author: ["Jane Smith"],
        book_publication_city: "London",
        book_publication_country: "United Kingdom",
        book_publication_year: "2021",
        book_pages: 250,
        book_title: "The Adventure Begins",
        id: 2,
      },
    };

    const newState = booksReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });

  it("should not update the state when payload={} is passed", () => {
    const action = {
      type: "LOADING_ACTION",
      payload: {},
    };

    const newState = booksReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
