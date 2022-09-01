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

const MovieDetail = () => {
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [people, setPeople] = useState({ cast: [] });
  //   const [loading, setLoading] = useState(false);
  const { title, poster_path, overview, genres, vote_average } = details;

  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    getMovieDetails(id).then((movie) => setDetails(movie)); //put everything in use effect into function?
    getSimilarMovies(id).then((movies) => setSimilar(movies));
    getMovieReviews(id).then((reviews) => setReviews(reviews));
    getMovieActors(id).then((actors) => setPeople(actors));
    window.scrollTo(0, 0);
  }, [id]);
  //   console.log(details);
  console.log(people);

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
            return (
              // <li key={actor.cast_id}>
              //   <Box
              //     component="img"
              //     sx={{
              //       height: 500,
              //       width: 350,
              //     }}
              //     alt="title"
              //     src={
              //       actor.profile_path
              //         ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
              //         : "https://i.kym-cdn.com/entries/icons/facebook/000/040/491/cover10.jpg"
              //     }
              //   />
              //   <h4>{actor.name ? actor.name : "John Souls"}</h4>
              // </li>
              <PersonCard person={person} />
            );
          })
        ) : (
          <p>Actor information unavailable</p>
        )}
      </ul>
    </div>
  );
};

export default MovieDetail;
