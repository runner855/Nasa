import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results) {
    return <p>No results</p>;
  } else {
    return (
      <>
        {results.map((image) => (
          <img
            data-testid="space-pic"
            className="card-img"
            src={image}
            alt="space-img"
          />
        ))}
      </>
    );
  }
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
