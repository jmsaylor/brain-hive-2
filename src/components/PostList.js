import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
  const renderPosts = () => {
    const display = posts.map((post) => {
      return (
        <div id={post.id} key={post.key}>
          <Post post={post} />;
        </div>
      );
    });
    return display;
  };
  return <div className='postList'>{renderPosts()}</div>;
};

export default PostList;
