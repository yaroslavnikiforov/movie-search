import React from "react";
import { Hits, Stats, SortBy, Pagination } from "react-instantsearch-dom";
import Hit from "./Hit";

function Content() {
  return (
    <main>
      <div className="information">
        <div className="stats">
          <Stats />
        </div>

        <div>
          <SortBy
            defaultRefinement="movies"
            items={[{ value: "movies", label: "Most Relevant" }]}
          />
        </div>
      </div>

      <Hits hitComponent={Hit} />

      <div>
        <Pagination />
      </div>
    </main>
  );
}

export default Content;
