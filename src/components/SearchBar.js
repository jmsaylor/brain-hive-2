import React from "react";
// import { Redirect } from "react-router-dom";

const SearchBar = (props) => {
  // console.log("***", this.props);
  return (
    // <div className='SearchBar'>
    <form className='SearchBar'>
      <input type='text' onChange={(e) => props.handleSearch(e)} />
      <button type='submit'>Search</button>
    </form>
    // </div>
  );
};

export default SearchBar;
