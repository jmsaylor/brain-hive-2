import React from "react";

const Post = ({ post }) => {
  return (
    <div className='box' id={post.id} key={post.key}>
      <h1>{post.title}</h1>
      <p>{post.resourceAuthor}</p>
      {post.videoLength ? <p>Length: {post.videoLength}</p> : null}
      {post.link ? (
        <div>
          <a href={post.link}>link</a>
        </div>
      ) : null}
      <p>Description: {post.summary}</p>
      <p>Rating: {post.rating}</p>
      <p>Comments: {post.comments.length}</p>
    </div>
  );
};

export default Post;
