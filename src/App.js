import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
import CuboidView from "./views/CuboidView";
import RollerView from "./views/RollerView";
import MaterialsView from "./views/MaterialsView";
import NavigationBar from "./NavigationBar";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/cuboid" element={<CuboidView />} />
        <Route path="/roller" element={<RollerView />} />
        <Route path="/materials" element={<MaterialsView />} />
      </Routes>
    </Router>
  );
}

export default App;
