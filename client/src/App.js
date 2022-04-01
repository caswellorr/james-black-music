import React, { useState, useEffect } from 'react';

import './App.scss';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';

// Pages
import Home from './pages/home/Home';
import Bio from './pages/bio/Bio';
import Gallery from './pages/gallery/Gallery';
import Subscribe from './pages/subscribe/Subscribe';

// Pages


function App() {

  // const [data, setdata] = useState(null);

  // useEffect(() => {
  //   fetch('/api')
  //     .then((res) => res.json())
  //     .then((data) => setdata(data.message));
  // }, []);

  return (
    <main className='App'>
      {/* <p>{!data ? "Loading..." : data}</p> */}
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route exact path="/">
              <Route index element={<Home />} />
            </Route>
            <Route path="/bio">
              <Route index element={<Bio />} />
            </Route>
            <Route path="/gallery">
              <Route index element={<Gallery />} />
            </Route>
            <Route path="/subscribe">
              <Route index element={<Subscribe />} />
            </Route>
          </Routes>
        </div>
        {/* <Navbar /> */}
      </BrowserRouter>
    </main>
  );
}

export default App;
