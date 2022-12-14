export const getPopularMovies = async (genres) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&with_genres=${genres}&sort_by=popularity.desc&include_adult=false&include_video=false`
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    throw error;
  }
};

export const getUpcomingMovies = async (genres) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&with_genres=${genres}&page=1`
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    throw error;
  }
};

export const getTopRatedMovies = async (genres) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&with_genres=${genres}&page=1`
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieDetails = async (id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const getSimilarMovies = async (id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieReviews = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  const json = await res.json();
  return json.results;
};

export const getMovieActors = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  return await res.json();
  // .then((json) => json.cast);
};

export const getPopularTvShows = async (genres) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&with_genres=${genres}&page=1`
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    throw error;
  }
};

export const getTopRatedTvShows = async (genres) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&with_genres=${genres}&page=1`
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    throw error;
  }
};

export const getTvShowDetails = async (id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const getSimilarTvShows = async (id) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/tv/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    throw error;
  }
};

export const getTvShowReviews = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  const json = await res.json();
  return json.results;
};

export const getTvShowActors = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  return await res.json();
  // .then((json) => json.cast);
};

export const getPersonDetails = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );
  return await res.json();
};

export const getPersonCredits = async (id) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );
  const json = await res.json();
  return json.cast;
};

export const searchContent = async (query) => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const json = await res.json();
    return json.results;
  } catch (error) {
    throw error;
  }
};

export const getMovieGenres = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const json = await res.json();
    return json.genres;
  } catch (error) {
    throw error;
  }
};

export const getTvGenres = async () => {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/tv/list?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
    );
    const json = await res.json();
    return json.genres;
  } catch (error) {
    throw error;
  }
};
