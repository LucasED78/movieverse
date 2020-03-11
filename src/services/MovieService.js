import api from './api';

export default {
  getAllMovies: page => api().get(`/discover/movie?page=${page}`),
  getAllSeries: page => api().get(`/discover/tv?page=${page}`)
}