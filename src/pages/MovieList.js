import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import styles from "./List.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [listChoice, setListChoice] = useState(getPopularMovies);

  useEffect(() => {
    listChoice.then((movieData) => {
      setMovies([...movieData]);
    });
  }, [listChoice]);

  const handleListChoice = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "popular":
        setListChoice(getPopularMovies);
        break;
      case "top_rated":
        setListChoice(getTopRatedMovies);
        break;
      case "upcoming":
        setListChoice(getUpcomingMovies);
        break;
      default:
        setListChoice(getPopularMovies);
        break;
    }
  };

  return (
    <div>
      <select name="list-select" id="list-select" onClick={handleListChoice}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
      <ul className={styles.layout}>
        {movies.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
