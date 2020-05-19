import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { changeForm, submitForm } from "../actions";

class PostForm extends Component {
  handleChange = (e) => {
    this.props.changeForm(e.target.id, e.target.value);
    console.log(this.props.newPost.form);
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
    const { form } = this.props.newPost;
    return (
      <div>
        <form style={myStyles.form} onSubmit={(e) => this.handleSubmit(e)}>
          {/* <label htmlFor="posterName">Your Name: </label> */}
          <input
            style={myStyles.input}
            type='text'
            id='posterName'
            placeholder='Your Name'
            value={form.posterName}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='resourceAuthor'
            placeholder='Author Name'
            value={form.resourceAuthor}
            onChange={(e) => this.handleChange(e)}
          />
          {/* dropdown skill level */}
          <div
            style={myStyles.input}
            id='jobSkillLevel'
            value={form.jobSkillLevel}>
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
            value={form.cohort}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='title'
            placeholder='title'
            value={form.title}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='categories'
            placeholder='Categories (seperate multiple with commas)'
            value={form.categories}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='link'
            placeholder='Resource Link'
            value={form.link}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='resourceType'
            placeholder='Resource Type'
            value={form.resourceType}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='date'
            id='datePublished'
            placeholder='Published Date'
            value={form.datePublished}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='videoLength'
            placeholder='Length of Video (optional)'
            value={form.videoLength}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='timeToComplete'
            placeholder='Time to complete resource'
            value={form.timeToComplete}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            style={myStyles.input}
            type='text'
            id='rating'
            placeholder='1 to 5 rating'
            value={form.rating}
            onChange={(e) => this.handleChange(e)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ newPost: store.newPost });
const mapActionsToProps = () => ({
  changeForm,
  submitForm,
});

export default connect(mapStoreToProps, mapActionsToProps())(PostForm);

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
