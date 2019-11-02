import React, { Component, Fragment } from "react";
import j2c from "j2c";
import StorageService from "../../utility/storageService";
import CharacterItem from "../shared/characterItem";
import Header from "../shared/header";
import NotFound from "../shared/notFound";
import arrow_down from "../../assets/images/arrow_down.png";

const css = j2c.sheet({
  ".characterContainer": {
    paddingTop: "50px",
    display: "grid",
    gridTemplateColumns: "auto",
    gridAutoRows: "420px",
    gridRowGap: "35px",
    width: "60%",
    minWidth: "220px",
    margin: "auto"
  },
  ".characterWrapper": {
    border: "1px solid black",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    ":hover > p": {
      height: "40px"
    }
  },
  ".characterTitle": {
    position: "absolute",
    bottom: "0px",
    left: "0px",
    right: "0px",
    height: 0,
    backgroundColor: "#ed1c24",
    textAlign: "center",
    lineHeight: "40px",
    verticalAlign: "middle",
    color: "white",
    fontFamily: "Georgia",
    overflow: "hidden",
    transition: "height 0.3s ease-out",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontWeight: "bold",
    fontSize: "17px"
  },
  ".characterImage": {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  ".paginationWrapper": {
    marginTop: "30px",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    borderTop: "1px solid grey"
  },
  ".arrowDown": {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    transition: "transform 0.3s linear",
    ":hover": {
      transform: "scale(1.3)"
    }
  },
  ".moreCharacters": {
    fontSize: "17px",
    fontWeight: "bold"
  },
  ".bookmarkStar": {
    position: "absolute",
    top: "-25px",
    left: "50%",
    transform: "translate(-50%,0)",
    width: "50px",
    height: "50px"
  }
});

const NUMBER__CHARACTERS = 20;
const MORE_CHARACTERS = "More characters";
const IMAGE_SIZE = "portrait_incredible";

class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      offset: 0
    };
  }

  componentDidMount() {
    const parsedStorage = JSON.parse(StorageService.get("characters"));
    if (Array.isArray(parsedStorage) && parsedStorage.length > 0)
      parsedStorage.map(item => this.setState({ [item.id]: item.id }));
  }

  renderSearchedCharacter = () => {
    const { characters } = this.props;

    return Array.isArray(characters) && characters.length > 0 ? (
      characters.map(item => (
        <CharacterItem
          image={`${item.thumbnail.path}/${IMAGE_SIZE}.${item.thumbnail.extension}`}
          title={item.name}
          wrapperCss={css.characterWrapper}
          titleCss={css.characterTitle}
          imageCss={css.characterImage}
          starCss={css.bookmarkStar}
          isBookmarked={this.state[item.id]}
          handleBookmark={this.handleBookmark}
          id={item.id}
          key={item.id}
        />
      ))
    ) : (
      <NotFound />
    );
  };

  renderStorageCharacters = () => {
    const parsedStorage = JSON.parse(StorageService.get("characters"));
    return parsedStorage.map(item => (
      <CharacterItem
        image={item.image}
        title={item.name}
        wrapperCss={css.characterWrapper}
        titleCss={css.characterTitle}
        imageCss={css.characterImage}
        starCss={css.bookmarkStar}
        isBookmarked={this.state[item.id]}
        handleBookmark={this.handleBookmark}
        id={item.id}
        key={item.id}
      />
    ));
  };

  setInputValue = e => {
    const { getCharactersAction, resetCharacters } = this.props;
    this.setState({ search: e.target.value, offset: 0 }, () => {
      if (this.state.search)
        getCharactersAction(this.state.search, this.state.offset);
    });
    resetCharacters();
  };

  getNewCharacters = () => {
    const { getCharactersAction } = this.props;
    const { search } = this.state;
    this.setState(
      prevState => ({
        offset: prevState.offset + NUMBER__CHARACTERS
      }),
      () => getCharactersAction(search, this.state.offset)
    );
  };

  handleBookmark = (id, name, image) => {
    this.setState(
      prevState => ({ [`${id}`]: !prevState[id] }),
      () => this.handleStorage(id, name, image)
    );
  };

  handleStorage = (id, name, image) => {
    const parsedStorage = JSON.parse(StorageService.get("characters"));

    if (this.state[id]) {
      const isArray = Array.isArray(parsedStorage)
        ? JSON.stringify([
            ...parsedStorage,
            {
              id: id,
              name: name,
              image: image
            }
          ])
        : JSON.stringify([{ id: id, name: name, image: image }]);

      StorageService.set("characters", isArray);
    } else {
      const filteredStorage = JSON.stringify(
        parsedStorage.filter(item => item.id !== id)
      );
      this.setState({ [id]: false });
      StorageService.set("characters", filteredStorage);
    }
  };

  render() {
    const { total } = this.props;
    const { search, offset } = this.state;

    return (
      <Fragment>
        <style>{css}</style>
        <Header search={search} setInputValue={this.setInputValue} />
        <div className={css.characterContainer}>
          {search
            ? this.renderSearchedCharacter()
            : this.renderStorageCharacters()}
        </div>
        {total - NUMBER__CHARACTERS > offset ? (
          <div className={css.paginationWrapper}>
            <p className={css.moreCharacters}>{MORE_CHARACTERS}</p>
            <img
              className={css.arrowDown}
              src={arrow_down}
              alt="arrow_down"
              onClick={this.getNewCharacters}
            />
          </div>
        ) : null}
      </Fragment>
    );
  }
}

export default HomeView;
