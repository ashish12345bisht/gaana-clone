import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Trending from "./pages/Trending";
import NewSongs from "./pages/NewSongs";
import OldSongs from "./pages/OldSongs";


//b8e1d9b97d6a4316a035affabef48963
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Homepage />} />
          <Route path="trending" element={<Trending />} />
          <Route path="new-songs" element={<NewSongs />} />
          <Route path="old-songs" element={<OldSongs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
