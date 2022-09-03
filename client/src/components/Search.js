import { useEffect, useState } from "react";
import { searchContent as getSearchContent } from "../api/tmdb";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Search = () => {
  const [queryChange, setQueryChange] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getSearchContent(queryChange)
      .then((data) => {
        setSearchResults([...data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [queryChange]);

  const handleChange = (e, v) => {
    setQueryChange(v);
  };

  return (
    <div>
      <Autocomplete
        onInputChange={handleChange}
        id="combo-box-demo"
        getOptionLabel={(searchResults) =>
          searchResults.name || searchResults.title
        }
        options={searchResults}
        renderOption={(props, searchResults) => {
          return (
            <Link
              to={`/${searchResults.title ? "movies" : "tv"}/${
                searchResults.id
              }`}
            >
              <Box component="li" {...props}>
                {searchResults.name || searchResults.title}
              </Box>
            </Link>
          );
        }}
        sx={{ width: 300 }}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        noOptionsText="No results found"
        renderInput={(params) => (
          <TextField {...params} label="Search" variant="outlined" />
        )}
      />
    </div>
  );
};

export default Search;
