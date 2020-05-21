import React, { Component } from "react";
import Rating from "./common/Rating";
import { Redirect } from "react-router-dom";

class Post extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  renderCategories = (post) => {
    var categories = "";
    for (let x = 0; x < post.categories.length; x++) {
      categories += post.categories[x];
      if (x < post.categories.length - 1) {
        categories += ", ";
      }
    }
    return categories;
  };

  render() {
    const { post } = this.props;
    return (
      <div
        className='box'
        id={post.id}
        key={post.key}
        onClick={() => this.handleClick()}>
        {this.state.clicked ? <Redirect to={`/post/${post.id}`} /> : null}
        <h1>{post.title}</h1>
        <p>{post.resourceAuthor}</p>
        {post.videoLength ? <p>Length: {post.videoLength}</p> : null}
        {post.link ? (
          <div>
            <a href={post.link}>link</a>
          </div>
        ) : null}
        <p>Description: {post.summary}</p>
        <div className='rating'>
          <p>Rating: {post.rating}</p>
          <Rating post={post} />
        </div>
        <p>Comments: {post.comments.length}</p>
        <p>Categories: {this.renderCategories(post)}</p>
      </div>
    );
  }
}

export default Post;
