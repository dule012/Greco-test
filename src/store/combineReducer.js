import { combineReducers } from "redux";
import { loading } from "./modules/loadingReducer";
import { characters } from "./modules/charactersReducer";

export default combineReducers({
  loading,
  characters
});
