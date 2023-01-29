import { useEffect, useState } from "react";
import {
    Link, useNavigate
  } from "react-router-dom";
import { CustomLink } from "../sharedComponents/CustomLink";
import { Page } from "../sharedComponents/Page";
import { ShutterAnimation } from "../shutter/ShutterAnimation";

export interface SplashPageProps {
  setTransition: any;
  halfFinishedTransitionAnimation: boolean;
}

export function SplashPage(props: SplashPageProps) {
    return (
      <Page setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
        <div className="splashPageWrapper">
        <CustomLink setTransition={props.setTransition} customClass="splashPage"  halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation} linkTo={"/work"} >
        <div className="title">
            <h1>VIEWFINDER</h1>
            <h4>Zoom In</h4>
            <img className="left-bottom" src={require("../resources/left-top-corner-project-details.png")}/>
            <img className="left-top" src={require("../resources/left-top-corner-project-details.png")}/>
        </div>
        <div className="description">
                {`Jenny Rodriguez is a graphic designer 
                who enjoys taking photos.`}
        </div>
      </CustomLink>
      </div>
      </Page>
    );
}