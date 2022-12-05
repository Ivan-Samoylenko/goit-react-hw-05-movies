import axios from 'axios';

const API_KEY = '6c0ec3a2b4afdab003374b17f43d4a73';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export async function getGenres() {
  return await axios.get('/genre/movie/list', {
    params: { api_key: API_KEY },
  });
}

export async function getTrendingByDay(page = 1) {
  return await axios.get('trending/movie/day', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
}

export async function searchMovie(query, page = 1) {
  return await axios.get('/search/movie', {
    params: {
      api_key: API_KEY,
      query,
      page,
    },
  });
}

export async function getMovieDetails(movie_id) {
  return await axios.get(`/movie/${movie_id}`, {
    params: {
      api_key: API_KEY,
    },
  });
}

export async function getMovieCast(movie_id) {
  return await axios.get(`/movie/${movie_id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
}

export async function getMovieReviews(movie_id) {
  return await axios.get(`/movie/${movie_id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
}
