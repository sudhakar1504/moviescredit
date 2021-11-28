const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3/";
const BACKPATH_URL = "https://image.tmdb.org/t/p/";
const SEARCH_URL = `${BASE_URL}search/movie?api_key=${API_KEY}&&query=`;
const POPULAR_URL = `${BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
const UPCOMING_URL = `${BASE_URL}movie/upcoming?api_key=${API_KEY}&language=en-US`;
const TOP_RATED = `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US`;
const LATEST = `${BASE_URL}search/movie?api_key=${API_KEY}&&query=the`;
const LOVE = `${BASE_URL}search/movie?api_key=${API_KEY}&&query=love`;
const ALPHA = `${BASE_URL}search/movie?api_key=${API_KEY}&&query=a`;
const WO = `${BASE_URL}search/movie?api_key=${API_KEY}&&query=wo`;
const BANNER_URL = "w1280";
const POSTER_URL = "w154";
const POSTER_URL_ONE = "w342";
const POSTER_URL_CAST = "w92";
export {
  BACKPATH_URL,
  BANNER_URL,
  POSTER_URL,
  BASE_URL,
  API_KEY,
  POPULAR_URL,
  UPCOMING_URL,
  TOP_RATED,
  LATEST,
  POSTER_URL_ONE,
  POSTER_URL_CAST,
};

const appsetting ={
  fetchmovies: async (page) => {
    const results = `${POPULAR_URL}&page=${page}`;
    return await (await fetch(results)).json();
  },
  fetchsearch: async (search) => {
    if (search) {
      const results = `${SEARCH_URL}${search}`;
      return await (await fetch(results)).json();
    }
  },
  fetchtoprated: async (trpage) => {
    if (trpage) {
      const results = `${TOP_RATED}&page=${trpage}`;
      return await (await fetch(results)).json();
    }
  },
  fetchlatest: async (trpage) => {
    if (trpage) {
      const results = `${LATEST}&page=${trpage}`;
      return await (await fetch(results)).json();
    }
  },
  fetchlove: async (trpage) => {
    if (trpage) {
      const results = `${LOVE}&page=${trpage}`;
      return await (await fetch(results)).json();
    }
  },
  fetchalpha: async (trpage) => {
    if (trpage) {
      const results = `${ALPHA}&page=${trpage}`;
      return await (await fetch(results)).json();
    }
  },
  fetchwo: async (trpage) => {
    if (trpage) {
      const results = `${WO}&page=${trpage}`;
      return await (await fetch(results)).json();
    }
  }
}
export default appsetting;
