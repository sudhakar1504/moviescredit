import { POPULAR_BASE_URL } from "./config";

const apiSettings = {
  fetchMovies: async (page) => {
    const endpoint = `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
};
export default apiSettings;
