import React, { useState } from "react";
import "../styles/App.css";
import Search from "./Search";
import SearchResults from "./SearchResults";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <header>
        <img
          className="nasa-logo"
          src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
          alt="nasaLogo"
        />
      </header>
      <div className="page">
        <div className="content">
          <Search setSearchResults={setSearchResults} />
          <SearchResults results={searchResults} />
        </div>
      </div>
    </div>
  );
}

export default App;
