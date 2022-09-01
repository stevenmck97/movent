import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import { roundToOneDec } from "../utils/voteRound";

const TvShowCard = ({ id, name, poster, rating }) => {
  return (
    <Link to={`/tv/${id}`}>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="266"
            image={`https://image.tmdb.org/t/p/w500/${poster}`}
            alt={name}
          />
          {roundToOneDec(rating)}
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default TvShowCard;
