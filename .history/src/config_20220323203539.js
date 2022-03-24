export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "6dc4483c77b849ecbf002144ee64855d";

const tmdbEndpoint = `https://api.themoviedb.org/3/movie`;

export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`,
  getMovieDetails: (id) => `${tmdbEndpoint}/${id}?api_key=${apiKey}`,
  getMovieInfo: (id, type) => `${tmdbEndpoint}/${id}/${type}?api_key=${apiKey}`,
};
