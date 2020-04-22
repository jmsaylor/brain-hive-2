import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import posts from "./mock/examplePosts";
import Form from "./components/Form";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    posts: [...posts],
  };

  addPost = (post) => {
    this.setState({
      posts: [...posts, post],
    });
  };

  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <PostList posts={this.state.posts} />
          </Route>
          <Route>
            <Form addPost={this.addPost} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
