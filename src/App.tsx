import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import BuildSquad from "./pages/BuildSquad";
function App() {
  return (
    <Routes>
      <Route path="" element={<Home/>}></Route>
      <Route path="/BuildSquad" element={<BuildSquad/>}></Route>
    </Routes>
  );
}

export default App;
