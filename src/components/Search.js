import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = () => {
  // eslint-disable-next-line no-unused-vars
  const [value, SetValue] = useState();

  // eslint-disable-next-line no-unused-vars
  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

  return (
    <div className="Search">
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          // eslint-disable-next-line no-undef
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="search-btn" type="submit">
          Go!
        </button>
      </form>
    </div>
  );
};

export default Search;
