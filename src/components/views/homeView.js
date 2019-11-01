import React, { Component } from "react";

class HomeView extends Component {
  componentDidMount() {
    const { getCharactersAction } = this.props;
    getCharactersAction("a", 0);
  }

  render() {
    return <div></div>;
  }
}

export default HomeView;
