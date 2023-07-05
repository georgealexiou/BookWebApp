import { renderHook, waitFor } from "@testing-library/react";
import { fetchBooks } from "../../../services/api/api";
import { useHomeScreen } from "../useHomeScreen";

const bookResponse = {
  books: [
    {
      book_author: ["Mock Author"],
      book_publication_city: "Mock City",
      book_publication_country: "Mock Country",
      book_publication_year: "2021",
      book_pages: 200,
      book_title: "Mock Title",
      id: 1,
    },
  ],
  count: 1,
};
var mockDispatch = jest.fn();

jest.mock("../../../services/api/api");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useSearchParams: () => [
    new URLSearchParams({ page: "5", itemsPerPage: "6", filterTerm: "filter" }),
  ],
}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("useHomeScreen", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("checks the fetched URL search params", async () => {
    const { result } = renderHook(useHomeScreen);

    expect(result.current.page).toStrictEqual("5");
    expect(result.current.itemsPerPage).toStrictEqual("6");

    expect(fetchBooks).toHaveBeenCalledWith({
      page: 5,
      itemsPerPage: 6,
      filters: [{ type: "all", values: ["filter"] }],
    });
  });

  it("handles successful API calls and dispatches the appropriate notification", async () => {
    (fetchBooks as jest.Mock).mockResolvedValue(bookResponse);
    renderHook(useHomeScreen);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "NOTIFY_INFO",
      payload: {
        title: "Loading Data",
        subtitle: "Please wait for the data to finish loading",
      },
    });

    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "SET_BOOKS",
        payload: bookResponse,
      })
    );
  });

  it("handles the error when the API fails and dispatches error notification", async () => {
    (fetchBooks as jest.Mock).mockRejectedValue(
      new Error("Mock error message")
    );
    renderHook(useHomeScreen);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "NOTIFY_INFO",
      payload: {
        title: "Loading Data",
        subtitle: "Please wait for the data to finish loading",
      },
    });

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith({
        type: "NOTIFY_ERROR",
        payload: {
          title: "Error",
          subtitle: "Mock error message",
        },
      });
    });
  });
});
