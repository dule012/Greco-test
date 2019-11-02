import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePageView from "./pages/homePageView";
import Loader from "./components/shared/loader";

const App = () => {
  return (
    <Provider store={store}>
      <Loader />
      <HomePageView />
    </Provider>
  );
};

export default App;
