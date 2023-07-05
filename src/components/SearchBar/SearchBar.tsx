import { Search as SearchIcon } from "@mui/icons-material";
import { AppBar, Box, InputBase, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSearchParams } from "react-router-dom";

type SearchAppBarProps = {
  page: string;
  itemsPerPage: string;
};

export const SearchAppBar = ({ page, itemsPerPage }: SearchAppBarProps) => {
  const [_, setSearchParams] = useSearchParams();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFilterTerm = event.target.value;
    setSearchParams({ filterTerm: newFilterTerm, page, itemsPerPage });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CustomAppBar>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            fontWeight="bold"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            📔 Books API
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              onChange={handleSearchChange}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {page && (
            <InfoBox>
              <Typography
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {`Page ${page}`}
              </Typography>
            </InfoBox>
          )}
          <Box width={10} />
          {itemsPerPage && (
            <InfoBox>
              <Typography
                noWrap
                component="div"
                sx={{ display: { xs: "none", sm: "block" } }}
              >
                {`${itemsPerPage} Items`}
              </Typography>
            </InfoBox>
          )}
        </Toolbar>
      </CustomAppBar>
    </Box>
  );
};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 15,
  backgroundColor: "#353535",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: 400,
  },
}));

const SearchIconWrapper = styled("div")(() => ({
  paddingLeft: 10,
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: "white",
  "& .MuiInputBase-input": {
    padding: 8,
    paddingLeft: 40,
    width: "100%",
  },
}));

const CustomAppBar = styled(AppBar)`
  background-color: #1d1d1d;
  position: fixed;
`;

const InfoBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#353535",
  padding: 2,
  paddingRight: 10,
  paddingLeft: 10,
  borderRadius: 15,
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));
