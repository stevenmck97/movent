import { useState } from "react";
import MovieCard from "../components/MovieCard";
import TvShowCard from "../components/TvShowCard";

const FavouriteList = ({
  faveMovies,
  setFaveMovies,
  faveTvShows,
  setFaveTvShows,
}) => {
  const [currentList, setCurrentList] = useState([]);

  const handleListClick = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "movies":
        setCurrentList(faveMovies);
        break;
      case "tvshows":
        setCurrentList(faveTvShows);
        break;
      default:
        setCurrentList();
        break;
    }
  };
  return (
    <div>
      <h1>Favourites</h1>
      <button onClick={handleListClick} value="movies">
        Movies
      </button>
      <button onClick={handleListClick} value="tv">
        TV Shows
      </button>

      {currentList === faveMovies
        ? faveMovies.map((movie) => {
            return (
              <MovieCard
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            );
          })
        : faveTvShows.map((show) => {
            return (
              <TvShowCard
                id={show.id}
                title={show.name}
                poster={show.poster_path}
                rating={show.vote_average}
              />
            );
          })}
    </div>
  );
};

export default FavouriteList;
