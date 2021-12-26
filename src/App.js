import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";
import CuboidView from "./views/CuboidView";
import RollerView from "./views/RollerView";
import MaterialsView from "./views/MaterialsView";
import NavigationBar from "./NavigationBar";
import AppModal from "./views/AppModal";

import { useGlobalContext } from "./Context";

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
          <Route path="/materials" element={<MaterialsView />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
