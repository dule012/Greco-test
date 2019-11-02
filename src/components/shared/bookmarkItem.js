import React from "react";
import PropTypes from "prop-types";
import emptyStar from "../../assets/images/empty_star.png";

const BookmarkItem = props => {
  const { isVisible, starCss } = props;
  return isVisible ? (
    <img className={starCss} src={emptyStar} alt={"emptyStar"} />
  ) : null;
};

BookmarkItem.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  starCss: PropTypes.string.isRequired
};

export default BookmarkItem;
