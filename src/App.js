import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import posts from "./mock/examplePosts";
import SinglePost from "./components/SinglePost";
import SearchBar from "./components/SearchBar";
import Form from "./components/Form";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Background from "./components/Background";

class App extends Component {
  constructor(props) {
    super(props);
    let arr = [...posts];
    arr.forEach((element, idx) => {
      element.key = idx;
      element.id = String(idx);
    });
    this.state = { posts: [...arr] };
  }

  addPost = (post) => {
    this.setState({
      posts: [...posts, post],
    });
  };

  componentDidMount() {
    console.log(this.state.posts);
  }

  render() {
    return (
      <BrowserRouter>
        {/* <Background /> */}
        <NavBar />
        <SearchBar />
        <Switch>
          <Route path='/' exact>
            <PostList posts={this.state.posts} />
          </Route>
          <Route path='/add' exact>
            <Form addPost={this.addPost} />
          </Route>
          <Route path='/post/:id'>
            <SinglePost posts={this.state.posts} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
