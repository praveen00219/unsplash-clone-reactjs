import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      onSearch(input);
    }
  };

  return (
    <form
      id="searchForm"
      className="search-input flex-1 relative mx-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="searchInput"
        placeholder="Search photos .."
        className="flex-1 bg-[#eeeeee] w-full rounded-full px-10 py-2 border-none focus:outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="search-btn absolute right-3 top-1 flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg py-1 px-2"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
