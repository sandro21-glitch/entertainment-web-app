import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Error from './components/Error';
import Navbar from "./components/Navbar";
import MoviesType from './pages/MoviesType'
import SeriesType from './pages/SeriesType'
import Bookmarks from "./pages/Bookmarks";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<MoviesType />} />
          <Route path="/series" element={<SeriesType />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
