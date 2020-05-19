import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import SinglePost from "./components/SinglePost";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Background from "./components/Background";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <SearchBar handleSearch={this.handleSearch} />
        <Switch>
          <Route path='/' exact>
            <PostList
              //idea of using redux is that you can fetch the data directly from the store instead of passing it from here
              handleSelect={this.handleSelect} //handle select doesnt have any method...
            />
          </Route>
          <Route path='/add' exact>
            <Form addPost={this.addPost} />
          </Route>
          <Route path='/post/:postId'>
            <SinglePost />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
