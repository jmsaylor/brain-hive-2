import React, { Component } from "react";
import Post from "./Post";
import { withRouter } from "react-router-dom";
import Button from "./common/Button";

class SinglePost extends Component {
  constructor(props) {
    super(props);
    const { postId } = this.props.match.params;
    const post = this.props.posts.filter((post) => post.id === postId);
    console.log(postId, post);
    this.state = {
      post: post,
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

  renderPosts = () => {
    const display = this.state.post.map((post) => {
      return (
        <div>
          <Post post={post} key={post.key} />;{this.renderYoutube(post)}
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
