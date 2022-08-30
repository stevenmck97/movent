import { useEffect, useState } from "react";
import { getLatestMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getLatestMovies().then((movieData) => {
      setMovies([...movieData]);
    });
  }, []);
  console.log(movies);

  return (
    <div>
      <ul>
        {movies.map((movie) => {
          return (
            <MovieCard title={movie.title} poster={movie.poster_path} />
            // <div key={movie.id}>
            //   <li key={movie.id}>{movie.title}</li>
            // </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
