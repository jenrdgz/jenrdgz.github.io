import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { SplashPage } from "./home/SplashPage";
import './home/SplashPage.css';
import './App.css'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/about" element={ <About />} />
        </Routes>
      </div>
    </Router>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}
