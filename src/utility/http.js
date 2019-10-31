import axios from "axios";
import { setLoading, endLoading } from "../store/modules/loading";

const http = axios.create({
  baseURL: process.env.URL
});

http.interceptors.request.use(
  () => setLoading(),
  error => Promise.reject(error)
);
http.interceptors.response.use(
  () => endLoading(),
  error => Promise.reject(error)
);

export default http;
