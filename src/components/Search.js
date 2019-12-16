import React from "react";
import algoliasearch from "algoliasearch";
import { InstantSearch } from "react-instantsearch-dom";
import Content from "./Content";
import Header from "./Header";

const searchClient = algoliasearch(
  "latency",
  "56f24e4276091e774e8157fe4b8b11f6"
);

function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName="movies">
      <Header />

      <div className="body-content">
        <Content />
      </div>
    </InstantSearch>
  );
}
export default Search;
