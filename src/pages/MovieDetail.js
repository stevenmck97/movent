import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieActors,
  getMovieDetails,
  getMovieReviews,
  getSimilarMovies,
} from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import Box from "@mui/material/Box";
import { roundToOneDec } from "../utils/voteRound";
import PersonCard from "../components/PersonCard";

const MovieDetail = ({ faveMovies, setFaveMovies }) => {
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [people, setPeople] = useState({ cast: [] });
  const { title, poster_path, overview, genres, vote_average } = details;

  const { id } = useParams();

  useEffect(() => {
    getMovieDetails(id).then((movie) => setDetails(movie)); //put everything in use effect into function?
    getSimilarMovies(id).then((movies) => setSimilar(movies));
    getMovieReviews(id).then((reviews) => setReviews(reviews));
    getMovieActors(id).then((actors) => setPeople(actors));
    window.scrollTo(0, 0);
  }, [id]);
  //   console.log(details);

  const handleFaveClick = () => {
    if (!faveMovies.find((obj) => obj.id === details.id)) {
      setFaveMovies([...faveMovies, details]);
    } else return;

    // setFaveMovies([...faveMovies, details]);
  };

  console.log(faveMovies);

  return (
    <div>
      <Box
        component="img"
        sx={{
          height: 500,
          width: 350,
        }}
        alt="title"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />

      <h2>
        {title ? title : <p>Title not found</p>} {roundToOneDec(vote_average)}
      </h2>
      <p>{overview}</p>
      <button onClick={handleFaveClick}>Add to Favourites</button>
      <ul>
        {genres ? (
          genres.map((genre) => {
            return <li key={genre.id}>{genre.name}</li>;
          })
        ) : (
          <p>No Genres Found</p>
        )}
      </ul>
      {similar.map((movie) => {
        return (
          <div key={movie.id}>
            <MovieCard
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
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

export default MovieDetail;
