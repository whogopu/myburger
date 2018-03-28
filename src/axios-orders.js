import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-151295.firebaseio.com/"
});

export default instance;
