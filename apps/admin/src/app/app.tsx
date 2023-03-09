// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { Route, Routes, Link } from 'react-router-dom';
import { getAllGames } from '../fake-api';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

export function App() {
  return (
    <div className="container">
      <div className="games-layout">
        {getAllGames().map((game) => (
          <Card key={game.id} className="game-card">
            <CardActionArea>
              <CardMedia
                className="game-card-media"
                image={game.image}
                title={game.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {game.name}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {game.description}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  className="game-rating"
                >
                  <strong>Rating:</strong>
                  {game.rating}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
