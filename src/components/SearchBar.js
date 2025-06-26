import React from 'react';
import { useDispatch } from 'react-redux';
import { filterContents } from '../store/actions/contentsActions';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(filterContents({ keyword: e.target.value }));
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Find the items you're looking for"
        onChange={handleSearch}
        className="search-input"
      />
      <svg
        className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#fff"
        viewBox="0 0 24 24"
      >
        <path d="M21.53 20.47l-4.79-4.79A7.938 7.938 0 0018 10a8 8 0 10-8 8 7.938 7.938 0 005.68-2.26l4.79 4.79a.75.75 0 001.06-1.06zM10 16a6 6 0 110-12 6 6 0 010 12z" />
      </svg>
    </div>
  );
};

export default SearchBar;