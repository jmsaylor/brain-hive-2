import React, { Component } from "react";
import "./App.css";
import PostList from "./components/PostList";
import NavBar from "./components/NavBar";
import posts from "./mock/examplePosts";
import Post from "./components/Post";
import Form from "./components/Form";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Background from "./components/Background";

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
        {/* <Background /> */}
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <PostList posts={this.state.posts} />
          </Route>
          <Route path='/add' exact>
            <Form addPost={this.addPost} />
          </Route>
          <Route path='/post/:id' exact>
            <Post posts={this.state.posts} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
