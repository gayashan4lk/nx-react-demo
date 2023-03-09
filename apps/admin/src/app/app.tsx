// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes, Link } from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getAllGames } from '../fake-api';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import styles from './app.module.css';
import { Game } from '../interfaces/Game';

export function App() {
  const [games, setGames] = useState<Game[]>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    const data = getAllGames();
    if (data) {
      setGames(data);
    } else {
      setError(true);
    }
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error occured!</div>;

  return (
    <div className="container">
      <div className={styles.gamesLayout}>
        {games &&
          games.map((game) => (
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
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
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
