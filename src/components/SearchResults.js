import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ results }) => {
  if (!results) {
    return <p></p>
  } else if (!results.length) {
    return <p className="results-message">No images found</p>
  } else {
    return(
      <div className="search-results">
        {results.map((result) => (
          <img 
            key={result}
            className="search-results__image"
            data-testid="search-results__image"
            src={result}
            alt="space"
          />
        ))}  
      </div> 
    );
  }
};

export default SearchResults;