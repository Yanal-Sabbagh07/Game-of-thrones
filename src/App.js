import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Houses from "./Pages/homePage/components/Houses";
import HouseDetails from "./Pages/detailsPage/HouseDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Houses />} />
        <Route
          path="/https://anapioficeandfire.com/api/houses/:id"
          element={<HouseDetails />}
        />
      </Routes>
    </Router>
  );
}

export default App;
