import React from "react";
import {Route, Routes} from "react-router-dom";

import Navbar from "./components/Navbar";
import Landing from "./pages/landing";
import Privileges from "./pages/privileges";


export default function App() {
  return (
    <div className=" min-h-screen p-1">
      <div className="max-w-6xl mx-auto pt-16">
        <Navbar />
        <span className=""></span>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privileges" element={<Privileges />} />
        </Routes>
      </div>
    </div>
  );
}