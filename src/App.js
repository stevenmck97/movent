import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import PersonDetail from "./pages/PersonDetail";
import TvList from "./pages/TvList";
import TvDetail from "./pages/TvDetails";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
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
        <Routes>
          <Route path="/" />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/tv" element={<TvList />} />
          <Route path="/tv/:id" element={<TvDetail />} />
          <Route path="/person/:id" element={<PersonDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
