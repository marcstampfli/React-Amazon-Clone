import axios from "axios";

const instance = axios.create({
  // API {cloud function} URL
  // baseURL: "http://localhost:5001/clone-666e1/us-central1/api
  baseURL: "https://us-central1-clone-666e1.cloudfunctions.net/api",
});

export default instance;
