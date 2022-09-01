import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import PersonDetail from "./pages/PersonDetail";
import TvList from "./pages/TvList";
import TvDetail from "./pages/TvDetails";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import FavouriteList from "./pages/FavouriteList";

function App() {
  const [faveMovies, setFaveMovies] = useState([]);
  const [faveTvShows, setFaveTvShows] = useState([]);

  return (
    <div className="App">
      <h1>Welcome to MovEnt!</h1>

      <BrowserRouter>
        <Link to="/">
          <p>Return to Home</p>
        </Link>
        <Link to="/movies">
          <p>Click here to see Movies!</p>
        </Link>
        <Link to="/tv">
          <p>Click here to see TV Shows!</p>
        </Link>
        <Link to="/favourites">
          <p>Click here to see your Favourites</p>
        </Link>
        <Routes>
          <Route path="/" />
          <Route path="/movies" element={<MovieList />} />
          <Route
            path="/movies/:id"
            element={
              <MovieDetail
                faveMovies={faveMovies}
                setFaveMovies={setFaveMovies}
              />
            }
          />
          <Route path="/tv" element={<TvList />} />
          <Route path="/tv/:id" element={<TvDetail />} />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route
            path="/favourites"
            element={
              <FavouriteList
                faveMovies={faveMovies}
                setFaveMovies={setFaveMovies}
                faveTvShows={faveTvShows}
                setFaveTvShows={setFaveTvShows}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
