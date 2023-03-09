// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from 'react-router-dom';

import { getAllGames } from '../fake-api';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import styles from './app.module.css';

export function App() {
  return (
    <div className="container">
      <div className={styles.gamesLayout}>
        {getAllGames().map((game) => (
          <Card key={game.id} className={styles.gameCard}>
            <CardActionArea>
              <CardMedia
                className={styles.gameCardMedia}
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
                  className={styles.gameRating}
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
