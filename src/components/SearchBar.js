import React, { Component } from "react";
import { Link } from "react-router-dom";

class SearchBar extends Component {
  state = {
    resourceType: "",
    searchString: "",
    results: [],
  };

  handleChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      resourceType: e.target.value,
      searchString: "post/" + e.target.value,
    });

    //add in results from matching props

    console.log(this.state.resourceType);
    console.log(this.state.searchString);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.searchString);
  };

  render() {
    return (
      <div className='SearchBar'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type='text' onChange={(e) => this.handleChange(e)} />
          <button type='submit'>Search</button>
        </form>
        <div id='search'>
          <Link to={this.state.resourceType}>Enter</Link>
        </div>
      </div>
    );
  }
}

export default SearchBar;
