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
import { Header } from '@nx-react-demo/my-shared-ui';
import { TestComponent } from '@nx-react-demo/my-shared-ui';
import { useCustomHook } from '@nx-react-demo/my-shared-ui';
import { utilFormatter } from '@nx-react-demo/util-formatters';

export function App() {
  const [games, setGames] = useState<Game[]>();
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>(false);

  async function fetchGames() {
    try {
      const data = await getAllGames();
      if (data) {
        setGames(data);
      } else {
        setError(true);
      }
    } catch (e) {
      setError(true);
      console.error(e);
    }
  }

  useEffect(() => {
    (async () => {
      setLoading(true);
      await fetchGames();
      setLoading(false);
    })();
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
      <div>
        <Header />
        <TestComponent />
      </div>
      <div>{utilFormatter()}</div>
    </div>
  );
}

export default App;
