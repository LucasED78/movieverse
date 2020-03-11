import axios from 'axios';

export default () => {
  const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
  });

  api.interceptors.request.use(config => {
    config.params = {};
    config.params['api_key'] = 'f128889504d00f157b7524a385fd6adf';

    return config;
  })
  
  return api;
}