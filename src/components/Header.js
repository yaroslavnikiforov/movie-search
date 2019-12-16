import React from "react";
import { SearchBox } from "react-instantsearch-dom";

function Header() {
  return (
    <header className="header">
      <SearchBox
        className="search-bar"
        translations={{ placeholder: "Search for Movies" }}
      />
    </header>
  );
}

export default Header;
