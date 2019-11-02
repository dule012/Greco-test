import React, { PureComponent, Fragment } from "react";
import PropTypes from "prop-types";
import BookmarkItem from "./bookmarkItem";
import bookmarkStar from "../../assets/images/bookmark_star.png";

class CharacterItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleToBookmark: false
    };
  }

  handleMouseOver = () => this.setState({ isVisibleToBookmark: true });
  handleMouseOut = () => this.setState({ isVisibleToBookmark: false });

  render() {
    const {
      image,
      title,
      wrapperCss,
      titleCss,
      imageCss,
      isBookmarked,
      starCss,
      handleBookmark,
      id
    } = this.props;
    const { isVisibleToBookmark } = this.state;
    return (
      <Fragment>
        <div
          className={wrapperCss}
          onClick={() => handleBookmark(id, title, image)}
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        >
          <img src={image} alt="character" className={imageCss} />
          <p className={titleCss}>{title}</p>
          {isBookmarked ? (
            <img className={starCss} src={bookmarkStar} alt={"bookmarkStar"} />
          ) : (
            <BookmarkItem isVisible={isVisibleToBookmark} starCss={starCss} />
          )}
        </div>
      </Fragment>
    );
  }
}

CharacterItem.defaultProps = {
  isBookmarked: PropTypes.undefined
};

CharacterItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  wrapperCss: PropTypes.string.isRequired,
  titleCss: PropTypes.string.isRequired,
  imageCss: PropTypes.string.isRequired,
  isBookmarked: PropTypes.bool,
  starCss: PropTypes.string.isRequired,
  handleBookmark: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default CharacterItem;
