import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom';




const MovieCard = ({movie}) => {

    return (
      <Link to={`/description/${movie.id}`}>
    <Card style={{margin:"30px"}} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={movie.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {movie.description}
          </Typography>
          <Rating name="read-only" value={Number(movie.rating)} readOnly />

        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  )
}

export default MovieCard