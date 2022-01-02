import Axios from "axios";

const baseURL = `http://192.168.1.9:80/api`;

const instance = Axios.create({
  baseURL,
});

export default instance;
