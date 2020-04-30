import React from "react";
import Post from "./Post";
import { useParams } from "react-router-dom";

const SinglePost = (props) => {
  let { posts } = props;
  const { id } = useParams();
  // posts = posts.filter((elem) => elem.id === id);
  console.log("id:", id, typeof id);

  posts.forEach((element) => {
    console.log(element.id, id);
  });

  posts = posts.filter((element) => element.id === id);

  console.log(posts);

  const renderPosts = () => {
    const display = posts.map((post) => {
      return <Post post={post} key={post.key} />;
    });
    return display;
  };
  return <div className='postList'>{renderPosts()}</div>;
};

export default SinglePost;
