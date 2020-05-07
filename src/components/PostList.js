import React from "react";
import Post from "./Post";

const PostList = (props) => {
  const { posts } = props;
  const renderPosts = (param) => {
    const display = posts.map((post) => {
      return (
        <div>
          <Post
            post={post}
            id={post.id}
            key={post.key}
            handleSelect={props.handleSelect}
          />
          ;
        </div>
      );
    });
    return display;
  };
  return <div className='postList'>{renderPosts()}</div>;
};

export default PostList;
