const MovieCard = ({ title, poster }) => {
  return (
    <div>
      <p>{title}</p>
      <img
        src={
          poster
            ? `https://image.tmdb.org/t/p/w500${poster}`
            : console.log("error")
        }
        alt={`Poster for ${title}`}
      />
    </div>
  );
};

export default MovieCard;
