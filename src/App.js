import React from "react";
import {
  BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Dsr from "./routes/Dsr";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="all-purpose-website" element={<Home />} />
        <Route path="all-purpose-website/dsr" element={<Dsr />}/>
      </Routes>
    </Router>
  );
}