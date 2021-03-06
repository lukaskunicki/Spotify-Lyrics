import React from "react";
import styled from "styled-components";

const StyledSearchBar = styled.form`
  background: #000;
  min-height: 82px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1em;

  & > input {
    font-family: "Noto Sans", sans-serif;
    max-width: 500px;
    width: 100%;
    height: 52px;
    border-radius: 12px;
    border: none;
    padding: 0 20px;
    font-size: 1.2em;
  }
`;

const SearchBar = ({ searchValue, searchValueHandler }) => {
  return (
    <StyledSearchBar key="searchBar">
      <input
        type="search"
        placeholder="Search for Songs and Artists"
        value={searchValue}
        onChange={(e) => searchValueHandler(e)}
        autoFocus="autoFocus"
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
