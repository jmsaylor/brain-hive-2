import React from "react";

const Post = ({ post, match }) => {
  // const id = match.params.id;
  // console.log(id);
  return (
    <div className='box'>
      <h1>{post.title}</h1>
      <p>{post.resourceAuthor}</p>
      {post.videoLength ? <p>Length: {post.videoLength}</p> : null}
      <p>Description: {post.summary}</p>
      <p>Rating: {post.rating}</p>
      <p>Comments: {post.comments.length}</p>
    </div>
  );
};

export default Post;
