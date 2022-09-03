import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const PersonCard = ({ person }) => {
  return (
    <Link to={`/person/${person.id}`}>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="266"
            image={`https://image.tmdb.org/t/p/w500/${person.profile_path}`}
            alt={person.name}
          />

          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {person.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default PersonCard;
