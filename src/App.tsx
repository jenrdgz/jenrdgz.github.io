import React, { useState } from "react";
import {
  HashRouter as Router,
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
import './portfolio/Portfolio.css';
import { Work } from "./work/Work";
import { ShutterAnimation } from "./shutter/ShutterAnimation";
import { Project } from "./work/Project";
import { About } from "./about/About";
import { Portfolio } from "./portfolio/Portfolio";
import { Resume } from "./resume/Resume";
import { PROJECT_ORDER } from "./work/ProjectList";

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
          {PROJECT_ORDER.map(projectName => {
            const pathUrl = `/${projectName}`
            return <Route path={pathUrl} element={ <Project projectName={projectName} setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          })}
          <Route path="/about" element={ <About setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/portfolio" element={ <Portfolio setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
          <Route path="/resume" element={ <Resume setTransition={setTransition} halfFinishedTransitionAnimation={halfFinishedTransitionAnimation} />} />
        </Routes>
      </div>
    </Router>
  );
}