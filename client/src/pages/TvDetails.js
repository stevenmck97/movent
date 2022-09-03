import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getTvShowActors,
  getTvShowDetails,
  getTvShowReviews,
  getSimilarTvShows,
} from "../api/tmdb";
import TvShowCard from "../components/TvShowCard";
import Box from "@mui/material/Box";
import { roundToOneDec } from "../utils/voteRound";
import PersonCard from "../components/PersonCard";

const TvDetail = ({ faveTvShows, setFaveTvShows }) => {
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [people, setPeople] = useState({ cast: [] });
  //   const [loading, setLoading] = useState(false);
  const { name, poster_path, overview, genres, vote_average } = details;

  const { id } = useParams();

  useEffect(() => {
    getTvShowDetails(id).then((tvShow) => setDetails(tvShow)); //put everything in use effect into function?
    getSimilarTvShows(id).then((tvShows) => setSimilar(tvShows));
    getTvShowReviews(id).then((reviews) => setReviews(reviews));
    getTvShowActors(id).then((actors) => setPeople(actors));
    window.scrollTo(0, 0);
  }, [id]);

  const handleFaveClick = () => {
    if (!faveTvShows.find((obj) => obj.id === details.id)) {
      setFaveTvShows([...faveTvShows, details]);
    } else return;

    // setFaveMovies([...faveMovies, details]);
  };

  const handleRemoveClick = () => {
    setFaveTvShows(faveTvShows.filter((obj) => obj.id !== details.id));
  };

  return (
    <div>
      <Box
        component="img"
        sx={{
          height: 500,
          width: 350,
        }}
        alt="name"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />

      <h2>
        {name ? name : <p>Title not found</p>} {roundToOneDec(vote_average)}
      </h2>
      <p>{overview}</p>
      {faveTvShows.find((obj) => obj.id === details.id) ? (
        <button onClick={handleRemoveClick}>Remove from Faves</button>
      ) : (
        <button onClick={handleFaveClick}>Add to Faves</button>
      )}
      <ul>
        {genres ? (
          genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })
        ) : (
          <p>No Genres Found</p>
        )}
      </ul>
      {similar.map((tvShow) => {
        return (
          <div key={tvShow.id}>
            <TvShowCard
              id={tvShow.id}
              name={tvShow.name}
              poster={tvShow.poster_path}
              rating={tvShow.vote_average}
            />
          </div>
        );
      })}

      {reviews ? (
        reviews.map((review) => {
          return (
            <table>
              <thead>
                <tr>
                  <th>{review.author ? review.author : "John Souls"}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{review.content ? review.content : "John souls"}</td>
                </tr>
              </tbody>
            </table>
          );
        })
      ) : (
        <p>No Reviews</p>
      )}

      <ul>
        {people ? (
          people.cast.map((person) => {
            return <PersonCard person={person} />;
          })
        ) : (
          <p>Actor information unavailable</p>
        )}
      </ul>
    </div>
  );
};

export default TvDetail;
