import React, { Fragment } from "react";
import j2c from "j2c";
import notFound from "../../assets/images/not_found.png";

const css = j2c.sheet({
  ".wrapper": {
    width: "100vw",
    height: "calc(100vh - 138px)",
    position: "fixed",
    top: "138px",
    left: "0px"
  },
  ".image": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  }
});

const NotFound = () => (
  <Fragment>
    <style>{css}</style>
    <div className={css.wrapper}>
      <img className={css.image} src={notFound} alt="notFound" />
    </div>
  </Fragment>
);

export default NotFound;
