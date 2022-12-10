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
import './footer/Footer.css';
import './work/Work.css';
import './shutter/Shutter.css';
import { Work } from "./work/Work";
import { ShutterAnimation } from "./shutter/ShutterAnimation";
import { Project } from "./work/Project";
import { About } from "./about/About";

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
          <Route path="/work" element={ <Work setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/project1" element={ <Project projectName="project1" setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/project2" element={ <Project projectName="project2" setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/project3" element={ <Project projectName="project3" setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/project4" element={ <Project projectName="project4" setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/project5" element={ <Project projectName="project5" setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/project6" element={ <Project projectName="project6" setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/about" element={ <About setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/portfolio" element={ <About setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/resume" element={ <About setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
        </Routes>
      </div>
    </Router>
  );
}