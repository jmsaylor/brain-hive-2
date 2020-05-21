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
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
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
          frameBorder='0'
          allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
      );
    }
  };

  render() {
    let { postId } = this.props.match.params;
    postId = parseInt(postId);
    console.log(postId);
    let post = this.props.posts.list.filter((post) => post.id === postId);
    console.log("ok", post);
    post = post[0];
    return (
      // <div style={{ textAlign: "center" }}>
      <div className='singlePost'>
        <Post post={post} key={post.key} />;{this.renderYoutube(post)}
        <Button onClick={() => this.clickHandler()}>
          {this.state.showComments ? "Click to Hide" : "Click to show"}
        </Button>
        {this.state.showComments ? this.renderComments(post) : null}
      </div>
      // </div>
    );
  }
}

const mapStoreToProps = (store) => {
  return { posts: store.posts };
};

export default connect(mapStoreToProps)(withRouter(SinglePost));
