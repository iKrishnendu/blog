import React from "react";
import "./style.css";
const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => {
  return (
    <div className="searchBar-wrap">
      <from onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Search By Category"
          value={value}
          onChange={handleSearchKey}
        />
        {value && <span onClick={clearSearch}>X</span>}
        <button>Go</button>
      </from>
    </div>
  );
};

export default SearchBar;
