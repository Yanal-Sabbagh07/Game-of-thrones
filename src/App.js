import "./App.css";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Hero from "./Pages/landingPage/Hero";
import Houses from "./Pages/homePage/components/Houses";
import HouseDetails from "./Pages/detailsPage/HouseDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Houses" element={<Houses />} />
        <Route
          path="/https://anapioficeandfire.com/api/houses/:id"
          element={<HouseDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
