import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../api/tmdb";
import Box from "@mui/material/Box";

const MovieDetail = () => {
  const [details, setDetails] = useState({});
  const { title, poster_path, overview, genres } = details;

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getMovieDetails(id).then((movie) => setDetails(movie));
  }, [id]);
  console.log(details);

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

      <h2>{title ? title : "Title not found"}</h2>
      <p>{overview}</p>
      <ul>
        {genres
          ? genres.map((genre) => {
              return <li>{genre.name}</li>;
            })
          : "No Genres Found"}
      </ul>
    </div>
  );
};

export default MovieDetail;
