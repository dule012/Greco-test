import React from "react";
import j2c from "j2c";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePageView from "./pages/homePageView";

const css = j2c.sheet({
  ".main": {
    width: "200px",
    height: "200px",
    border: "1px solid black",
    display: "grid"
  }
});

const App = () => {
  return (
    <Provider store={store}>
      <style>{css}</style>
      <div className={css.main}></div>;
      <HomePageView />
    </Provider>
  );
};

export default App;
