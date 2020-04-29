import React from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";

const SinglePost = (props) => {
  let { posts } = props;
  const { id } = useParams();
  // posts = posts.filter((elem) => elem.id === id);
  console.log("id:", id, typeof id);
  console.log(posts[0].id);
  const renderPosts = () => {
    const display = posts
      .filter((elem) => elem[id] === 1)
      .map((post) => {
        return <Post post={post} />;
      });
    return display;
  };
  return <div className='postList'>{renderPosts()}</div>;
};

export default SinglePost;
