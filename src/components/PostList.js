import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { increment } from "../actions";

const PostList = (props) => {
  const handleClick = () => {
    props.increment(props.count);
    console.log(props.count);
  };
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
  console.log("count", props.count);
  return (
    <div>
      <div className='postList'>{renderPosts()}</div>
      <div style={{ textAlign: "center" }}>
        <p>{props.count}</p>
        <button onClick={handleClick}>Count</button>
      </div>
    </div>
  );
};

const mapStoretoProps = (store) => ({ count: store.count });
const mapActionstoProps = () => ({ increment });

export default connect(mapStoretoProps, mapActionstoProps())(PostList);
