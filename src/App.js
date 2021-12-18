import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Houses from "./Pages/homePage/Houses";
import Details from "./Pages/detailsPage/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Houses />} />
        <Route
          path="/https://anapioficeandfire.com/api/houses/:id"
          element={<Details />}
        />
      </Routes>
    </Router>
  );
}

export default App;
