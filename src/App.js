import { Switch, Route, Redirect } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';
import Container from './components/Container';
import Navigation from './components/Navigation';
const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));
const NotFoundView = lazy(() => import('./views/NotFound'));

export default function App() {
  return (
    <Container>
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/movies">
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>

          <Route>
            <Redirect to={'/'} />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
