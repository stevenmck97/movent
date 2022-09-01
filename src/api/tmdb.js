export const getPopularMovies = (page) => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=${page}`
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

export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const getMovieActors = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((res) => res.json());
  // .then((json) => json.cast);
};

export const getPopularTvShows = () => {
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

export const getTopRatedTvShows = () => {
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

export const getTvShowDetails = (id) => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    ).then((res) => res.json());
  } catch (error) {
    throw error;
  }
};

export const getSimilarTvShows = (id) => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  } catch (error) {
    throw error;
  }
};

export const getTvShowReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const getTvShowActors = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((res) => res.json());
  // .then((json) => json.cast);
};

export const getPersonDetails = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  ).then((res) => res.json());
};

export const getPersonCredits = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  )
    .then((res) => res.json())
    .then((json) => json.cast);
};
