import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { increment } from "../actions";

const PostList = (props) => {
  console.log("props is", props);

  const { posts, reduxVar } = props; // because of this you can access the length as posts.length

  const handleClick = () => {
    props.increment(reduxVar.count);
    // console.log(props.count);
  };

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

  // i belive you are trying to get the count from your redux store.... so it would be johnposts.count
  console.log("count", reduxVar.count);
  return (
    <div>
      <div className='postList'>{renderPosts()}</div>
      <div style={{ textAlign: "center" }}>
        <p>{reduxVar.count}</p>
        <button onClick={handleClick}>Count</button>
      </div>
    </div>
  );
};

// you have the reducer called posts... not count.....  so now you can access all your

const mapStoretoProps = (store) => ({ reduxVar: store.posts });
const mapActionstoProps = () => ({ increment });

export default connect(mapStoretoProps, mapActionstoProps())(PostList);
