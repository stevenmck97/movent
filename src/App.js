import MovieList from "./pages/MovieList";
import MovieDetail from "./pages/MovieDetail";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to MovEnt!</h1>

      <BrowserRouter>
        <Link to="/movies">
          <p>Click here to see movies!</p>
        </Link>
        <Routes>
          <Route path="/" />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movies/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
