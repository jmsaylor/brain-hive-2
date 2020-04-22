import React, { Component } from "react";
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
    datePublished: null,
    videoLength: "",
    timeToComplete: "",
    rating: "",
    comments: "",
  };
  handleChange = (e) => {
    console.log(this.state);
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let post = this.state;
    this.props.addPost(post);
  };

  render() {
    return (
      <div>
        <form style={myStyles.form} onSubmit={(e) => this.handleSubmit(e)}>
          {/* <label htmlFor="posterName">Your Name: </label> */}
          <input
            type='text'
            id='posterName'
            placeholder='Your Name'
            value={this.state.posterName}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            id='resourceAuthor'
            placeholder='Author Name'
            value={this.state.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <div>
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
            type='text'
            id='cohort'
            placeholder='Cohort #'
            value={this.state.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            id='title'
            placeholder='title'
            value={this.state.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            id='categories'
            placeholder='Categories (seperate multiple with commas)'
            value={this.state.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            id='link'
            placeholder='Resource Link'
            value={this.state.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            id='resourceType'
            placeholder='Resource Type'
            value={this.state.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='date'
            id='datePublished'
            placeholder='Published Date'
            value={this.state.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            id='videoLength'
            placeholder='Length of Video (optional)'
            value={this.state.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type='text'
            id='timeToComplete'
            placeholder='Time to complete resource'
            value={this.state.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
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
const myStyles = {
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default PostForm;
