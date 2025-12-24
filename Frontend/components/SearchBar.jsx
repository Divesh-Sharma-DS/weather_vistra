import React from "react";
import { FiSearch } from "react-icons/fi";

function SearchBar({ city, setCity, onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
      />
      <button onClick={onSearch}>
        <FiSearch /> Search
      </button>
    </div>
  );
}

export default SearchBar;
