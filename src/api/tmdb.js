export const getPopularMovies = () => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  } catch (error) {
    throw error;
  }
};

export const getUpcomingMovies = () => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  } catch (error) {
    throw error;
  }
};

export const getTopRatedMovies = () => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  } catch (error) {
    throw error;
  }
};

export const getPopularTv = () => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  } catch (error) {
    throw error;
  }
};

export const getTopRatedTv = () => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = (id) => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then((res) => res.json());
  } catch (error) {
    throw error;
  }
};

export const getSimilarMovies = (id) => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  } catch (error) {
    throw error;
  }
};
