import React from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from './pages/home/Home';
import Bio from './pages/bio/Bio';
import Gallery from './pages/gallery/Gallery';
import Subscribe from './pages/subscribe/Subscribe';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path="/">
            <Route index element={<Home />} />
          </Route>
          <Route exact path="/bio">
            <Route index element={<Bio />} />
          </Route>
          <Route exact path="/gallery">
            <Route index element={<Gallery />} />
          </Route>
          <Route exact path="/subscribe">
            <Route index element={<Subscribe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
