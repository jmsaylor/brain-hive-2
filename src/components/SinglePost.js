import React, { Component } from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";

class SinglePost extends Component {
  constructor(props) {
    super(props);
  }
  // posts = posts.filter((elem) => elem.id === id);
  // console.log("id:", id, typeof id);

  // posts.forEach((element) => {
  //   console.log(element.id, id);
  // });

  // console.log(posts);

  renderPosts = () => {
    const { postId } = useParams();

    const regexDigits = /\d*/;
    const regexWords = /^A-Z/;

    let { posts } = this.props;
    posts = this.id.match(regexDigits)
      ? posts.filter((element) => element.id === postId)
      : posts;

    posts = this.id.match(regexWords)
      ? posts.filter((element) => element.resourceType === postId)
      : posts;

    const display = posts.map((post) => {
      return <Post post={post} key={post.key} />;
    });
    return display;
  };
  render() {
    return <div className='postList'>{this.renderPosts()}</div>;
  }
}

export default SinglePost;
