import React from "react";
import Nav from "./Nav";
import About from "./About";
import Info from "./Info";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/about/*" element={<About />} />
          <Route path="/info/*" element={<Info />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
