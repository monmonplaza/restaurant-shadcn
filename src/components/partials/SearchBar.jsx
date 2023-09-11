import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <form className="search-box w-1/3 fixed top-3 left-1/2 -translate-x-1/2  ">
      <div className="pb-2 flex items-center relative">
        <input
          type="search"
          placeholder="Search here..."
          className="rounded-tr-none rounded-br-none border  text-sm py-2 "
        />
        <button
          type="submit"
          className="rounded text-[16px] p-2.5 border border-accent rounded-tl-none rounded-bl-none border-l-0 bg-accent text-white hover:bg-accentDark hover:border-accentDark"
        >
          <FaSearch />
        </button>

        <p className="absolute top-2 right-20">Result: 1</p>
      </div>
    </form>
  );
};

export default SearchBar;
