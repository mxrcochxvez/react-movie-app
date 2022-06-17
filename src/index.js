import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import LandingPage from "./features/MovieSearch/pages/LandingPage";
import { MoviesProvider } from "./features/Providers/MoviesProvider";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FavoritesPage from './features/FavoriteMovies/pages/FavoritesPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MoviesProvider>
        <navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/favorites" component={FavoritesPage} />
        </Switch>
      </MoviesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
