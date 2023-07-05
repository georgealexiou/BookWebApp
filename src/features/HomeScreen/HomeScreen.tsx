import { BookList } from "../../components/BookList/BookList";
import { NotificationAlert } from "../../components/NotificationAlert/NotificationAlert";
import { SearchAppBar } from "../../components/SearchBar/SearchBar";
import { useHomeScreen } from "./useHomeScreen";

export const HomeScreen = () => {
  const { page, itemsPerPage } = useHomeScreen();
  return (
    <>
      <NotificationAlert />
      <SearchAppBar page={page} itemsPerPage={itemsPerPage} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: "black",
        }}
      >
        <BookList />
      </div>
    </>
  );
};
