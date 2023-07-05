import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { BookContainer } from "../BookContainer/BookContainer";

export const BookList = () => {
  const books = useSelector((state: RootState) => state.books.books);
  return (
    <Grid container spacing={2} p={2} pt={10}>
      {books.map((book, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={index}>
          <BookContainer book={book} />
        </Grid>
      ))}
    </Grid>
  );
};
