import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

const App = () => (
  <Router>
    <nav className="bg-blue-700 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-lg font-semibold">Event Registration</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/admin" className="hover:underline">Admin</Link>
        </div>
      </div>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>
);

export default App;
