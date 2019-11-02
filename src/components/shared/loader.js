import React, { Fragment } from "react";
import { connect } from "react-redux";
import j2c from "j2c";
import { loadingSelector } from "../../store/selectors/loadingSelector";
import "../../App.css";

const css = j2c.sheet({
  ".container": {
    width: "100vw",
    position: "fixed",
    left: "0px",
    zIndex: "999",
    backgroundColor: "white"
  }
});

const HEADER_HEIGHT = 90;

const mapStateToProps = state => ({ ...loadingSelector(state) });

const Loader = props => {
  const { loading } = props;
  const top =
    window.pageYOffset > HEADER_HEIGHT
      ? "0px"
      : `${HEADER_HEIGHT - window.pageYOffset}px`;

  const loaderContainer = (
    <Fragment>
      <style>{css}</style>
      <div
        className={css.container}
        style={{ height: `calc(100vh - ${top})`, top: top }}
      >
        <div className={"loader"}></div>
      </div>
    </Fragment>
  );

  return loading ? loaderContainer : null;
};

export default connect(
  mapStateToProps,
  null
)(Loader);
