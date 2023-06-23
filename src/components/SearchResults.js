import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p className="results-message">No results</p>
  } else {
    return(
      <div className="search-results">
        {results.map((result) => (
          <img 
            className="search-results__image"
            src={result}
            alt="space"
          />
        ))}  
      </div> 
    );
  }
};

export default SearchResults;