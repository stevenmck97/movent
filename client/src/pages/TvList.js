import { useEffect, useState } from "react";
import {
  getPopularTvShows,
  getTopRatedTvShows,
  getTvGenres,
} from "../api/tmdb";
import TvShowCard from "../components/TvShowCard.js";
import styles from "./List.module.css";

const TvList = () => {
  //filter search, filter by genre

  const [tvShows, setTvShows] = useState([]);
  const [listChoice, setListChoice] = useState(getPopularTvShows);
  const [tvGenreList, setTvGenreList] = useState([]);
  const [tvGenreChoice, setTvGenreChoice] = useState([]);

  useEffect(() => {
    listChoice.then((tvShowData) => {
      setTvShows([...tvShowData]);
    });

    getTvGenres().then((genreData) => {
      setTvGenreList([...genreData]);
    });
  }, [listChoice]);

  const handleListChoice = (e) => {
    e.preventDefault();
    switch (e.target.value) {
      case "popular":
        setListChoice(getPopularTvShows);
        break;
      case "top_rated":
        setListChoice(getTopRatedTvShows);
        break;
      default:
        setListChoice(getPopularTvShows);
        break;
    }
  };

  const handleGenreChoice = (e) => {
    e.preventDefault();
    const genreId = e.target.value;
    setTvGenreChoice([...tvGenreChoice, genreId]);
    setListChoice(
      getPopularTvShows(tvGenreChoice) || getTopRatedTvShows(tvGenreChoice)
    );
  };

  return (
    <div>
      <select name="list-select" id="list-select" onClick={handleListChoice}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
      </select>

      <select name="genre-select" id="genre-select" onClick={handleGenreChoice}>
        {tvGenreList.map((genre) => {
          return <option value={genre.id}>{genre.name}</option>;
        })}
      </select>
      <ul className={styles.layout}>
        {tvShows.map((tvShow) => {
          return (
            <TvShowCard
              id={tvShow.id}
              name={tvShow.name}
              poster={tvShow.poster_path}
              rating={tvShow.vote_average}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TvList;
