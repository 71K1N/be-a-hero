import axios from 'axios';

const api = axios.create({
  //
  baseURL: 'https://apitkn.herokuapp.com'
})

export default api;