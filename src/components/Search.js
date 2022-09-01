import { useState } from "react";

const Search = ({ setSearchQuery }) => {
  const [queryChange, setQueryChange] = useState("");

  const handleChange = (e) => {
    setQueryChange(e.target.value);
  };

  const handleSearch = () => {
    setSearchQuery(queryChange);
  };

  return (
    <div className="search">
      <input
        onChange={handleChange}
        type="text"
        name="search"
        placeholder="Search"
      />
      <button name="search" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
