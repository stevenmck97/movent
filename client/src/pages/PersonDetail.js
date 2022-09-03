import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPersonCredits, getPersonDetails } from "../api/tmdb";
import { Box } from "@mui/material";
import MovieCard from "../components/MovieCard";

const PersonDetail = () => {
  const { id } = useParams();
  const [credits, setCredits] = useState([]);
  const [person, setPerson] = useState({});

  useEffect(() => {
    getPersonDetails(id).then((person) => setPerson(person));
    getPersonCredits(id).then((credits) => setCredits(credits));
  }, [id]);

  return (
    <div>
      <h2>{person.name}</h2>
      <Box
        component="img"
        sx={{
          height: 500,
          width: 350,
        }}
        alt="title"
        src={
          person.profile_path
            ? `https://image.tmdb.org/t/p/w500${person.profile_path}`
            : "https://i.kym-cdn.com/entries/icons/facebook/000/040/491/cover10.jpg"
        }
      />

      <ul>
        {credits.map((movie) => {
          return (
            <li key={movie.id}>
              <MovieCard
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                rating={movie.vote_average}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PersonDetail;
