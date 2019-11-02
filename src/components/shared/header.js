import React, { Fragment } from "react";
import j2c from "j2c";
import PropTypes from "prop-types";
import marvelLogo from "../../assets/images/marvel.png";

const css = j2c.sheet({
  ".header": {
    paddingBottom: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#202020",
    "@media screen and (min-width: 600px)": {
      justifyContent: "space-around"
    }
  },
  ".titleContainer": {
    padding: "20px 0",
    display: "flex",
    justifyContent: "center"
  },
  ".title": {
    height: "50px"
  },
  ".searchContainer": {
    display: "flex",
    justifyContent: "center"
  },
  ".search": {
    padding: "5px 7px",
    borderRadius: "15px",
    border: "none",
    outline: "none",
    ":focus": {
      outline: "none"
    }
  }
});

const Header = props => {
  const { search, setInputValue } = props;
  return (
    <Fragment>
      <style>{css}</style>
      <header className={css.header}>
        <div className={css.titleContainer}>
          <img className={css.title} src={marvelLogo} alt="marvel" />
        </div>
        <div className={css.searchContainer}>
          <input
            className={css.search}
            name="search"
            type="text"
            value={search}
            onChange={setInputValue}
            placeholder="Search characters"
          />
        </div>
      </header>
    </Fragment>
  );
};

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setInputValue: PropTypes.func.isRequired
};

export default Header;
