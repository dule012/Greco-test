import React from "react";
import emptyStar from "../../assets/images/empty_star.png";

const BookmarkItem = props => {
  const { isVisible, starCss } = props;
  return isVisible ? (
    <img className={starCss} src={emptyStar} alt={"emptyStar"} />
  ) : null;
};

export default BookmarkItem;
