import { useEffect, useState } from "react";
import { getPopularTvShows, getTopRatedTvShows } from "../api/tmdb";
import TvShowCard from "../components/TvShowCard.js";
import styles from "./List.module.css";

const TvList = () => {
  //filter search, filter by genre

  const [tvShows, setTvShows] = useState([]);
  const [listChoice, setListChoice] = useState(getPopularTvShows);

  useEffect(() => {
    listChoice.then((tvShowData) => {
      setTvShows([...tvShowData]);
    });
  }, [listChoice]);
  console.log(tvShows);

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

  return (
    <div>
      <select name="list-select" id="list-select" onClick={handleListChoice}>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
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
