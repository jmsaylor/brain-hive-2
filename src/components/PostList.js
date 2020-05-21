import React from "react";
import Post from "./Post";
import { connect } from "react-redux";
import { increment } from "../actions";

const PostList = (props) => {
  let posts = [];
  const { originalPosts, searchObj } = props; // because of this you can access the length as posts.length
  if (searchObj.search !== "") {
    posts = searchObj.list;
  } else {
    posts = originalPosts.list;
  }
  // posts = originalPosts.list;
  console.log(posts);

  const handleClick = () => {
    props.increment(originalPosts.count);
    // console.log(props.count);
  };

  const renderPosts = () => {
    const display = posts.map((post) => {
      return <Post post={post} key={post.key} />;
    });
    return display;
  };

  return (
    <div>
      <div className='postList'>{renderPosts()}</div>
      <div style={{ textAlign: "center" }}>
        <p>{originalPosts.count}</p>
        <button onClick={handleClick}>Count</button>
      </div>
    </div>
  );
};

// you have the reducer called posts... not count.....  so now you can access all your

const mapStoretoProps = (store) => ({
  originalPosts: store.posts,
  searchObj: store.search,
});
const mapActionstoProps = () => ({ increment });

export default connect(mapStoretoProps, mapActionstoProps())(PostList);
