import React from "react";
import { connect } from "react-redux";
import { changeSearch } from "../actions";
// import { Redirect } from "react-router-dom";

const SearchBar = (props) => {
  // console.log("***", this.props);
  const handleSearch = (e) => {
    // console.log(props.allPosts);
    props.changeSearch(e.target.value, props.allPosts);
    console.log(props.searchObj.search);
  };
  return (
    <form className='SearchBar'>
      <input type='text' onChange={(e) => handleSearch(e)} />
      <button type='submit'>Search</button>
    </form>
  );
};

const mapStoreToProps = (store) => ({
  searchObj: store.search,
  allPosts: store.posts.list,
});
const mapActionsToProps = () => ({ changeSearch });

export default connect(mapStoreToProps, mapActionsToProps())(SearchBar);
