import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { SplashPage } from "./splashpage/SplashPage";
import './splashpage/SplashPage.css';
import './App.css'
import './nav/Nav.css';
import './portfolio/Work.css';
import './shutter/Shutter.css';
import { Portfolio } from "./portfolio/Portfolio";
import { ShutterAnimation } from "./shutter/ShutterAnimation";
import { Project } from "./portfolio/Project";

export default function App() {
  const [transition, setTransition] = useState(false);
  const [halfFinishedTransitionAnimation, setHalfFinishedTransitionAnimation] = useState(false);

  const displayTransition = transition ? <ShutterAnimation animationFinishedCallback={() => { setTransition(false); setHalfFinishedTransitionAnimation(false); }} animationHalfFinishedCallback={() => setHalfFinishedTransitionAnimation(true)} reverse={true} /> : null;

  return (
    <Router>
      <div>
        {displayTransition}
        <Routes>
          <Route path="/" element={<SplashPage setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/about" element={ <Portfolio setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/project1" element={ <Project />} />
          <Route path="/project2" element={ <Project />} />
          <Route path="/project3" element={ <Project />} />
          <Route path="/project4" element={ <Project />} />
          <Route path="/project5" element={ <Project />} />
          <Route path="/project6" element={ <Project />} />
        </Routes>
      </div>
    </Router>
  );
}