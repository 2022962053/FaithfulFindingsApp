// frontend/src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ListPage from "./components/ListPage";
import MapsPage from "./components/MapsPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/list">List</Link>
          </li>
          <li>
            <Link to="/maps">Maps</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/maps" element={<MapsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
