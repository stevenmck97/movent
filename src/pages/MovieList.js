import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import styles from "./MovieList.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((movieData) => {
      setMovies([...movieData]);
    });
  }, []);
  console.log(movies);

  return (
    <div>
      <ul className={styles.layout}>
        {movies.map((movie) => {
          return <MovieCard title={movie.title} poster={movie.poster_path} />;
        })}
      </ul>
    </div>
  );
};

export default MovieList;
