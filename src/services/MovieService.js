import api from './api';

export default {
  getAll: page => api().get(`/discover/movie?page=${page}`)
}