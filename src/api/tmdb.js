export const getLatestMovies = () => {
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
