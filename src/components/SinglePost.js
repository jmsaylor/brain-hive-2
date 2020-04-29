import React from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";

const SinglePost = (props) => {
  const { posts } = props;
  const { id } = useParams();
  console.log(typeof id, "param");
  console.log(typeof posts[0].id);
  const renderPosts = () => {
    const display = posts
      .filter((elem) => elem[id] === id)
      .map((post) => {
        return <Post post={post} />;
      });
    return display;
  };
  return <div className='postList'>{renderPosts()}</div>;
};

export default SinglePost;
