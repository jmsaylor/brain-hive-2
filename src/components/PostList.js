import React from "react";
import Post from "./Post";

const PostList = (props) => {
  const { posts } = props;
  const renderPosts = (param) => {
    const display = posts.map((post) => {
      return (
        <Post
          post={post}
          id={post.id}
          key={post.key}
          handleSelect={props.handleSelect}
        />
      );
    });
    return display;
  };
  return <div className='postList'>{renderPosts()}</div>;
};

export default PostList;
