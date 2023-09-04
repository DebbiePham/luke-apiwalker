import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import People from './components/People';
import Planets from './components/Planets';
import Error from './components/Error';
import Starships from "./components/Starships";

function App() {
  return (
    <div class="App">
      <Home />
      <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planets />} />
          <Route path="/starships/:id" element={<Starships />} />
          <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
