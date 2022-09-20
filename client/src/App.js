import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import PersonDetail from "./pages/PersonDetail";
import TvList from "./pages/TvList";
import TvDetail from "./pages/TvDetails";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import FavouriteList from "./pages/FavouriteList";
import Search from "./components/Search";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Logout from "./components/Logout";

function App() {
  const [faveMovies, setFaveMovies] = useState([]);
  const [faveTvShows, setFaveTvShows] = useState([]);
  const [faveTracker, setFaveTracker] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  // const [token, setToken] = useState("");

  const authUser = localStorage.getItem("user");

  useEffect(() => {
    if (authUser) {
      setIsAuthorized(true);
      // setToken(JSON.parse(localStorage.getItem("user")).token);
    }
  }, [isAuthorized, authUser]);

  return (
    <div className="App">
      <h1>Welcome to MovEnt!</h1>

      <BrowserRouter>
        <Search />
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

        {isAuthorized ? null : (
          <Link to="/register">
            <p>Register</p>
          </Link>
        )}

        {isAuthorized ? null : (
          <Link to="/login">
            <p>Login</p>
          </Link>
        )}

        {isAuthorized ? <Logout /> : null}

        <Routes>
          <Route path="/" />
          <Route path="/movies" element={<MovieList />} />
          <Route
            path="/movies/:id"
            element={
              <MovieDetail
                faveMovies={faveMovies}
                setFaveMovies={setFaveMovies}
                faveTracker={faveTracker}
                setFaveTracker={setFaveTracker}
              />
            }
          />
          <Route path="/tv" element={<TvList />} />
          <Route
            path="/tv/:id"
            element={
              <TvDetail
                faveTvShows={faveTvShows}
                setFaveTvShows={setFaveTvShows}
              />
            }
          />
          <Route path="/person/:id" element={<PersonDetail />} />
          <Route
            path="/favourites"
            element={
              <FavouriteList
                faveMovies={faveMovies}
                setFaveMovies={setFaveMovies}
                faveTvShows={faveTvShows}
                setFaveTvShows={setFaveTvShows}
                faveTracker={faveTracker}
                setFaveTracker={setFaveTracker}
              />
            }
          />
          {isAuthorized ? (
            console.log("You are authorized")
          ) : (
            <Route path="/register" element={<Register />} />
          )}

          {isAuthorized ? (
            console.log("You are authorized")
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
