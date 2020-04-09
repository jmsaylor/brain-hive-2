import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Post from "./components/Post";

class App extends Component {
  post = {
    posterName: "Arnell Milhouse",
    resourceAuthor: "Albert Einstein",
    jobSkillLevel: "Advanced",
    cohort: "0",
    title: "The Universal Equation",
    categories: ["FORTRAN", "redux"],
    summary: "This was a great article about blending fortran and redux.",
    link: "www.google.com/search?q=Albert%20Einstein",
    resourceType: "Article",
    datePublished: "1943-10-03.00:00:00z",
    videoLength: null,
    timeToComplete: 3,
    rating: 5,
    comments: [{ commenter: "Cliff", text: "Nice post" }],
  };
  render() {
    return (
      <div className='App'>
        <Post post={this.post} />
      </div>
    );
  }
}

export default App;
