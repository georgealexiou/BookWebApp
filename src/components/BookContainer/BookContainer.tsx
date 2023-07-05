import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { Book } from "../../services/api/api";

type BookContainerProps = {
  book: Book;
};

export class BookContainer extends React.Component<BookContainerProps> {
  render() {
    const { book } = this.props;
    return (
      <Card
        sx={{
          maxWidth: 400,
          marginBottom: 2,
          height: 1,
          backgroundColor: "#1d1d1d",
          borderRadius: 5,
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            component="div"
            color="white"
            fontWeight="bold"
          >
            {book.book_title}
          </Typography>
          <Box>
            <Typography variant="subtitle1" color="white">
              Author: {book.book_author.join(", ")}
            </Typography>
            <Typography variant="subtitle2" color="white">
              Publication Year: {book.book_publication_year}
            </Typography>
            <Typography variant="subtitle2" color="white">
              Pages: {book.book_pages}
            </Typography>
            <Typography variant="subtitle2" color="white">
              Publication City: {book.book_publication_city}
            </Typography>
            <Typography variant="subtitle2" color="white">
              Publication Country: {book.book_publication_country}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }
}
