import React from "react";

const Rating = (props) => {
  const renderRating = (rating) => {
    let stars = [];
    for (let x = 0; x < rating; x++) {
      stars.push(<i className='far fa-hand-spock' key={x}></i>);
    }
    return stars;
  };
  return <div className='rating'>{renderRating(props.post.rating)}</div>;
};

export default Rating;
