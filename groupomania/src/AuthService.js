
import axios from 'axios';
const url = 'http://localhost:3000/api/signup';
export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data);
  },
  signUp(credentials) {
    return axios
      .post(url, +  credentials)
      .then(response => response.data);
  },

};