import React from "react";
import styled from "styled-components";

const SearchBar = ({ searchValue, searchValueHandler }) => {
  const StyledSearchBar = styled.form`
    background: #000;
    min-height: 82px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > input { 
      max-width: 500px;
      width: 100%;
      height: 52px;
      border-radius: 12px;
      border: none;
      padding: 0 20px;
      font-size: 1.2em;
    }
  `;
  return (
    <StyledSearchBar>
      <input
        type="search"
        placeholder="Search for Songs and Artists"
        value={searchValue}
        onChange={(e) => searchValueHandler(e)}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
