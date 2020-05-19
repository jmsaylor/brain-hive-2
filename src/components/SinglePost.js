import React, { Component } from "react";
import Post from "./Post";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Button from "./common/Button";

class SinglePost extends Component {
  state = {
    showComments: false,
  };

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
    // console.log(this.state);
  }

  renderYoutube = (post) => {
    if (post.link.indexOf("youtube") >= 0) {
      const marker = post.link.indexOf("?v=") + 3;
      const videoId = post.link.substring(marker);
      return (
        <iframe
          title='youtube'
          src={`https://www.youtube.com/embed/${videoId}`}
          width='500'
          height='300'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen></iframe>
      );
    } else if (post.link.indexOf("youtu.be") >= 0) {
      const marker = post.link.indexOf(".be/") + 4;
      const videoId = post.link.substring(marker);
      return (
        <iframe
          title='youtube'
          src={`https://www.youtube.com/embed/${videoId}`}
          width='500'
          height='300'
          frameborder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      );
    }
  };

  render() {
    let posts = this.props.posts.list;
    console.log("yep", posts);
    let { postId } = this.props.match.params;
    postId = parseInt(postId);
    console.log(postId);
    const postIndex = this.props.posts.list.findIndex(
      (post) => (post.id = postId)
    );
    console.log("index", postIndex);
    const post = this.props.posts.list[postIndex];
    console.log("ok", post);
    return (
      <div style={{ textAlign: "center" }}>
        <Post post={post} key={post.key} />;{this.renderYoutube(post)}
        <Button onClick={() => this.clickHandler()}>
          {this.state.showComments ? "Click to Hide" : "Click to show"}
        </Button>
        {this.state.showComments ? this.renderComments(post) : null}
      </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { posts: store.posts };
};

export default connect(mapStoreToProps)(withRouter(SinglePost));
