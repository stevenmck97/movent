import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getMovieDetails,
  getMovieReviews,
  getSimilarMovies,
} from "../api/tmdb";
import MovieCard from "../components/MovieCard";
import Box from "@mui/material/Box";
import { roundToOneDec } from "../utils/voteRound";

const MovieDetail = () => {
  const [details, setDetails] = useState({});
  const [similar, setSimilar] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { title, poster_path, overview, genres, vote_average } = details;

  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    getMovieDetails(id).then((movie) => setDetails(movie));
    getSimilarMovies(id).then((movies) => setSimilar(movies));
    getMovieReviews(id).then((reviews) => setReviews(reviews));
  }, [id]);
  //   console.log(details);
  console.log(reviews);

  return (
    <div>
      <Box
        component="img"
        sx={{
          height: 500,
          width: 350,
        }}
        alt="The house from the offer."
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
      />

      <h2>
        {title ? title : "Title not found"} {roundToOneDec(vote_average)}
      </h2>
      <p>{overview}</p>
      <ul>
        {genres
          ? genres.map((genre) => {
              return <li>{genre.name}</li>;
            })
          : "No Genres Found"}
      </ul>
      {similar.map((movie) => {
        return (
          <div>
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.poster_path}
              rating={movie.vote_average}
            />
          </div>
        );
      })}
      <table>
        {reviews.map((review) => {
          return (
            <div>
              <thead>
                <tr>
                  <th>{review.author}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{review.content}</td>
                </tr>
              </tbody>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default MovieDetail;
