import { useEffect, useState } from "react";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
  getMovieGenres,
} from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import styles from "./List.module.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [listChoice, setListChoice] = useState(getPopularMovies);
  const [movieGenreList, setMovieGenreList] = useState([]);
  const [genreChoice, setGenreChoice] = useState();
  const [newMovies, setNewMovies] = useState([]);

  useEffect(() => {
    listChoice.then((movieData) => {
      setMovies([...movieData]);
    });

    getMovieGenres().then((genreData) => {
      setMovieGenreList([...genreData]);
    });
  }, [listChoice]);

  console.log();

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

  const handleGenreChoice = (e) => {
    e.preventDefault();
    const genreId = e.target.value;
    // const genreName = movieGenreList.find((genre) => genre.id === genreId);
    const filteredMovies = movies.filter((movies) =>
      movies.genre_ids.includes(genreId)
    );
    console.log(genreId);
    setNewMovies(filteredMovies);
    setMovies(newMovies);
    console.log(filteredMovies);
  };

  // console.log(genreChoice);

  return (
    <div>
      <select name="list-select" id="list-select" onClick={handleListChoice}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>

      <select name="genre-select" id="genre-select" onClick={handleGenreChoice}>
        {movieGenreList.map((genre) => {
          return <option value={genre.id}>{genre.name}</option>;
        })}
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
