export const fetcher = (...args) => fetch(...args).then((res) => res.json());
export const apiKey = "6dc4483c77b849ecbf002144ee64855d";

const tmdbEndpoint = `https://api.themoviedb.org/3/movie`; // endpoint MOvie
const tmdEndpointTV = `https://api.themoviedb.org/3/tv`; // enpoint Movie TV

export const tmdbAPI = {
  getMovieList: (type) => `${tmdbEndpoint}/${type}?api_key=${apiKey}`, // list
  getMovieDetails: (id) => `${tmdbEndpoint}/${id}?api_key=${apiKey}`, // details
  getMovieInfo: (id, type) => `${tmdbEndpoint}/${id}/${type}?api_key=${apiKey}`, // info
  imagesOriginal: (url) => `https://image.tmdb.org/t/p/original/${url}`, // img
  getMovieTV: (type) => `${tmdEndpointTV}/${type}?api_key=${apiKey}&page=1`, // movie tv
  getMovieInfoTV: (id, type) =>
    `${tmdEndpointTV}/${id}/${type}?api_key=${apiKey}`,
};
