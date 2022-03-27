import React from "react";
import Nav from "./Nav";
import About from "./About";
import Info from "./Info";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import CoButton from "./components/atoms/CoButton";

function App() {
  return (
    <div className="App">
      <CoButton label='dfdsfds' />
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
