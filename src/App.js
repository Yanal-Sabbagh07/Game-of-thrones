import "./App.css";
import React, { useState } from "react";
import { Route, Routes, HashRouter as Router } from "react-router-dom";
import Hero from "./Pages/landingPage/Hero";
import Houses from "./Pages/housesListPage/components/Houses";
import HouseDetails from "./Pages/detailsPage/HouseDetails";

function App() {
  const [menuOpen, setMenuOpen] = useState("home");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Hero menu={menuOpen} setMenu={setMenuOpen} />}
        />
        <Route
          path="/Houses"
          element={<Houses menu={menuOpen} setMenu={setMenuOpen} />}
        />
        <Route path="/Houses/:id" element={<HouseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
