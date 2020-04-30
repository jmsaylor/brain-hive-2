import React, { Component } from "react";
import Post from "./Post";
import { withRouter } from "react-router-dom";
import Button from "./common/Button";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    const { postId } = this.props.match.params;
    this.state = {
      postId: postId,
      showComments: false,
    };
  }

  clickHandler = () => {
    this.setState({
      showComments: !this.state.showComments,
    });
  };
  renderComments = (post) => {
    return post.comments.map((comment) => {
      return (
        <div className='box'>
          <p>{comment.name}</p>
          <p>{comment.text}</p>
        </div>
      );
    });
  };

  componentDidMount() {
    console.log(this.state);
  }

  renderPosts = () => {
    const { postId } = this.state;
    const regexDigits = /\d*/;
    const regexWords = /^A-Z/;
    let { posts } = this.props;
    console.log(posts);
    posts = postId.match(regexDigits)
      ? posts.filter((element) => element.id === postId)
      : posts;

    posts = postId.match(regexWords)
      ? posts.filter((element) => element.resourceType === postId)
      : posts;

    const display = posts.map((post) => {
      return (
        <div>
          <Post post={post} key={post.key} />;
          <Button onClick={() => this.clickHandler()}>
            {this.state.showComments ? "Click to Hide" : "Click to show"}
          </Button>
          {this.state.showComments ? this.renderComments(post) : null}
        </div>
      );
    });
    return display;
  };

  render() {
    return <div className='postList'>{this.renderPosts()}</div>;
  }
}

export default withRouter(SinglePost);
