import React from "react";
import { connect } from "react-redux";
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePageView);
