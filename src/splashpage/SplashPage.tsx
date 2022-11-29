import { useEffect, useState } from "react";
import {
    Link, useNavigate
  } from "react-router-dom";
import { Page } from "../sharedComponents/Page";
import { ShutterAnimation } from "../shutter/ShutterAnimation";

export interface SplashPageProps {
  setTransition: any;
  halfFinishedTransitionAnimation: boolean;
}

export function SplashPage(props: SplashPageProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    props.setTransition(true);
  }

  if (props.halfFinishedTransitionAnimation) {
    navigate("/about");
  }


    return (
      <Page>
        <div onClick={handleClick} className="splashPage customLink">
        <div className="title">
            VIEWFINDER
            <img className="left-bottom" src={require("../resources/left-bottom-corner.png")}/>
            <img className="left-top" src={require("../resources/left-top-corner.png")}/>
        </div>
        <div className="description">
                {`Jenny Rodriguez is both—
            a graphic designer & photographer.`}
        </div>
      </div>
      </Page>
    );
}