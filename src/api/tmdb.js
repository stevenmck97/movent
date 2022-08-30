export const getLatestMovies = () => {
  try {
    return fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ed7df36066c84a5101c9ace7991534b8&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((json) => json.results);
  } catch (error) {
    throw error;
  }
};
