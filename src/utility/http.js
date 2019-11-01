import axios from "axios";
import {
  setLoadingAction,
  endLoadingAction
} from "../store/modules/loadingReducer";
import store from "../store/store";

const http = axios.create({});

http.interceptors.request.use(
  config => {
    store.dispatch(setLoadingAction());
    return config;
  },
  error => Promise.reject(error)
);
http.interceptors.response.use(
  response => {
    store.dispatch(endLoadingAction());
    return response;
  },
  error => Promise.reject(error)
);

export default http;
