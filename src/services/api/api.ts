const API_BASE_URL = "http://nyx.vima.ekt.gr:3000";

export type Book = {
  book_author: string[];
  book_publication_city: string;
  book_publication_country: string;
  book_publication_year: string;
  book_pages: number;
  book_title: string;
  id: number;
};

export type BooksResponse = {
  books: Book[];
  count: number;
};

type Filters = {
  type: string;
  values: string[];
};

export type SearchPayload = {
  page: number;
  itemsPerPage: number;
  filters: Filters[] | [];
};

export const fetchBooks = async (
  payload: SearchPayload
): Promise<BooksResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/books`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Error fetching books");

    const data: BooksResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
};
