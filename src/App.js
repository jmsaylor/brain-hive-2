import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import posts from "./mock/examplePosts";
import SinglePost from "./components/SinglePost";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Background from "./components/Background";
class App extends Component {
  constructor(props) {
    super(props);
    let arr = [...posts];
    arr.forEach((element, idx) => {
      element.key = idx;
      element.id = String(idx);
    });
    this.state = {
      posts: [...arr],
      search: null,
      searchResults: [...arr],
    };
  }

  addPost = (post) => {
    post.id = this.state.posts.length;
    console.log("post", post);
    this.setState({
      ...this.state,
      posts: [...this.state.posts, post],
    });
  };

  handleSearch = (e) => {
    let query = e.target.value;
    query = query.toLowerCase();
    const newPosts = this.state.posts.filter(
      (post) =>
        post.title.toLowerCase().indexOf(query) >= 0 ||
        post.summary.toLowerCase().indexOf(query) >= 0 ||
        post.categories.join().toLowerCase().indexOf(query) >= 0
    );
    this.setState({
      query,
      searchResults: [...newPosts],
    });
  };

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <SearchBar handleSearch={this.handleSearch} />
        <Switch>
          <Route path='/' exact>
            <PostList
              posts={this.state.searchResults}
              handleSelect={this.handleSelect}
            />
          </Route>
          <Route path='/add' exact>
            <Form addPost={this.addPost} />
          </Route>
          <Route path='/post/:postId'>
            <SinglePost posts={this.state.posts} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
