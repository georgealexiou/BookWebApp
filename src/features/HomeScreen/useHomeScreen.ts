import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { fetchBooks } from "../../services/api/api";

export const useHomeScreen = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const page = searchParams.get("page") || "1";
  const itemsPerPage = searchParams.get("itemsPerPage") || "20";
  const filterTerm = searchParams.get("filterTerm");

  useEffect(() => {
    const loadBooks = async () => {
      try {
        dispatch({
          type: "NOTIFY_INFO",
          payload: {
            title: "Loading Data",
            subtitle: "Please wait for the data to finish loading",
          },
        });

        const data = await fetchBooks({
          page: Number(page),
          itemsPerPage: Number(itemsPerPage),
          filters: filterTerm ? [{ type: "all", values: [filterTerm] }] : [],
        });

        dispatch({ type: "SET_BOOKS", payload: data });
      } catch (error) {
        dispatch({
          type: "NOTIFY_ERROR",
          payload: {
            title: "Error",
            subtitle: (error as Error).message,
          },
        });
      }
    };

    loadBooks();
  }, [dispatch, searchParams, page, itemsPerPage, filterTerm]);

  return { page, itemsPerPage };
};
