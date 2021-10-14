import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://restcountries.com/v2',  
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  // timeout: 1000
})

export default {
  getEvents() {
    return apiClient.get('/all')
  },
  getSearchName(name) {
    return apiClient.get('/name/'+name)
  }
};