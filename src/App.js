import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
import CuboidView from "./views/CuboidView";
import RollerView from "./views/RollerView";
import MaterialsView from "./views/MaterialsView";
import NavigationBar from "./NavigationBar";
import TubeView from "./views/TubeView";
import AppModal from "./views/AppModal";

import { useGlobalContext } from "./Context";
import About from "./views/About";

function App() {
  const { modalShow, setModalShow, modalText } = useGlobalContext();
  return (
    <>
      <AppModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        text={modalText}
      />
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/cuboid" element={<CuboidView />} />
          <Route path="/roller" element={<RollerView />} />
          <Route path="/tubes" element={<TubeView />} />
          <Route path="/materials" element={<MaterialsView />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
