import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import TvShowCard from "../components/TvShowCard";
import { getFavouritesList } from "../api/server";

/*
Make different state variable to keep track of what is in favourites list
*/

const FavouriteList = ({
  faveMovies,
  setFaveMovies,
  faveTvShows,
  setFaveTvShows,
}) => {
  const [currentList, setCurrentList] = useState([]);
  const [dbFaveMovies, setDbFaveMovies] = useState([]);

  useEffect(() => {
    const getFavourites = async () => {
      const data = await getFavouritesList();
      const movies = data.filter((obj) => obj.favourite.movie);
      setFaveMovies(movies);
    };
    getFavourites();
  }, [setFaveMovies]);

  console.log(faveMovies);

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
        ? faveMovies.map((item) => {
            return (
              <MovieCard
                id={item.favourite.movie.id}
                title={item.favourite.movie.title}
                poster={item.favourite.movie.poster_path}
                rating={item.favourite.movie.vote_average}
              />
            );
          })
        : faveTvShows.map((item) => {
            return (
              <TvShowCard
                id={item.favourite.tv.id}
                name={item.favourite.tv.name}
                poster={item.favourite.tv.poster_path}
                rating={item.favourite.tv.vote_average}
              />
            );
          })}
    </div>
  );
};

export default FavouriteList;
