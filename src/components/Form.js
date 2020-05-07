import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class PostForm extends Component {
  state = {
    posterName: "",
    resourceAuthor: "",
    jobSkillLevel: "",
    cohort: "",
    title: "",
    categories: "",
    summary: "",
    link: "",
    resourceType: "",
    datePublished: "",
    videoLength: "",
    timeToComplete: "",
    rating: "",
    comments: "",
  };

  handleChange = (e) => {
    // console.log(this.state);
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let post = { ...this.state };
    post.categories = post.categories.split(",");
    console.log("formPost", post);
    this.props.addPost(post);
    // for (const prop in post) {
    //   post[prop] = "";
    // }
    // this.setState({
    //   ...post,
    // });
    // console.log("cleared", post);
    // console.log("newstate", this.state);
  };

  render() {
    return (
      <div>
        <form style={myStyles.form} onSubmit={(e) => this.handleSubmit(e)}>
          {/* <label htmlFor="posterName">Your Name: </label> */}
          <input
            style={myStyles.input}
            type='text'
            id='posterName'
            placeholder='Your Name'
            value={this.state.posterName}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='resourceAuthor'
            placeholder='Author Name'
            value={this.state.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <div style={myStyles.input}>
            <select>
              <option value='' disabled>
                Author skill level
              </option>
              <option value='Intro'>Intro</option>
              <option value='Intermediate'>Intermediate</option>
              <option value='Advanced'>Advanced</option>
            </select>
          </div>
          <input
            style={myStyles.input}
            type='text'
            id='cohort'
            placeholder='Cohort #'
            value={this.state.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='title'
            placeholder='title'
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='categories'
            placeholder='Categories (seperate multiple with commas)'
            value={this.state.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='link'
            placeholder='Resource Link'
            value={this.state.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='resourceType'
            placeholder='Resource Type'
            value={this.state.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='date'
            id='datePublished'
            placeholder='Published Date'
            value={this.state.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='videoLength'
            placeholder='Length of Video (optional)'
            value={this.state.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='timeToComplete'
            placeholder='Time to complete resource'
            value={this.state.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='rating'
            placeholder='1 to 5 rating'
            value={this.state.rating}
            onChange={(e) => this.handleChange(e)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default PostForm;

const myStyles = {
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "20%",
    marginLeft: "20%",
    flexDirection: "column",
  },
  input: {
    width: "70%",
    height: 32,
    fontSize: 20,
    marginBottom: 4,
  },
};
