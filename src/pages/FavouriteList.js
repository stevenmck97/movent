import { useState } from "react";
import MovieCard from "../components/MovieCard";

const FavouriteList = ({
  faveMovies,
  setFaveMovies,
  faveTvShows,
  setFaveTvShows,
}) => {
  console.log(faveMovies);
  return (
    <div>
      <h1>Favourites</h1>
      {faveMovies.map((movie) => {
        return (
          <MovieCard
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            rating={movie.vote_average}
          />
        );
      })}
    </div>
  );
};

export default FavouriteList;
