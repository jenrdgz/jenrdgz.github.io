import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { SplashPage } from "./splashpage/SplashPage";
import './splashpage/SplashPage.css';
import './App.css'
import './nav/Nav.css';
import './portfolio/Work.css';
import { Portfolio } from "./portfolio/Portfolio";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<SplashPage />} />
          <Route path="/about" element={ <Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}