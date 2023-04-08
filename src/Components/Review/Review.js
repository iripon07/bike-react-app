import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faCoffee,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Review.css";

const Review = (props) => {
  // console.log(props.review);
  const { img, review, ratings } = props.review;
  return (
    <div className="review-container">
      <img src={img} alt="" />
      <p>{review}</p>
      <div className="ratings">
        <div>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          {/* <FontAwesomeIcon icon={faStar}></FontAwesomeIcon> */}
        </div>
        <p>{ratings}</p>
      </div>
    </div>
  );
};

export default Review;
