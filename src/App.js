import React, { Component } from "react";
import "./App.css";
import Post from "./components/Post";
import posts from "./mock/examplePosts";

class App extends Component {
  renderPosts = () => {
    const display = posts.map((post) => {
      return <Post post={post} />;
    });
    return display;
  };

  render() {
    return (
      <div className='App'>
        <h1>BRAIN HIVE</h1>
        <div className='postList'>{this.renderPosts()}</div>
      </div>
    );
  }
}

export default App;
