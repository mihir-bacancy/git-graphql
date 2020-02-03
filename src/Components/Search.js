import React from "react";
import styled from "styled-components";

const SearchBox = styled.input`
  width: 50%;
  border: 3px solid;
  border-right: none;
  padding: 5px;
  height: 40px;
  border-radius: 5px 0 0 5px;
  outline: none;
  margin-left: 5px;
`;

function Search() {
  return (
    <SearchBox
      type="search"
      // onChange={e => searchRepositories(e.target.value)}
      placeholder="Find Repositories..."
      aria-label="Search"
    />
  );
}

export default Search;
