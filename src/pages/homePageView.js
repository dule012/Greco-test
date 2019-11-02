import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { charactersSelector } from "../store/selectors/charactersSelector";
import {
  getCharacters,
  resetCharactersAction
} from "../store/modules/charactersReducer";
import HomeView from "../components/views/homeView";

const mapStateToProps = state => ({
  ...charactersSelector(state)
});

const mapDispatchToProps = dispatch => ({
  getCharactersAction: (name, number) => getCharacters(dispatch, name, number),
  resetCharacters: () => resetCharactersAction(dispatch)
});

const HomePageView = props => <HomeView {...props} />;

HomePageView.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
  getCharactersAction: PropTypes.func.isRequired,
  resetCharacters: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageView);
