import React, { Fragment } from "react";
import j2c from "j2c";

const css = j2c.sheet({
  ".main": {
    width: "200px",
    height: "200px",
    border: "1px solid black",
    display: "grid"
  }
});
console.log(css);
const App = () => {
  return (
    <Fragment>
      <style>{css}</style>
      <div className={css.main}></div>;
    </Fragment>
  );
};

export default App;
