import { useEffect, useState } from "react";
import {
    Link, useNavigate
  } from "react-router-dom";
import { CustomLink } from "../sharedComponents/CustomLink";
import { Page } from "../sharedComponents/Page";
import { ProgressiveImage } from "../sharedComponents/ProgressiveImage";
import { ShutterAnimation } from "../shutter/ShutterAnimation";
import { PROJECTS, PROJECT_ORDER } from "./ProjectList";

export interface WorkProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
  }

export function Work(props: WorkProps) {
    return (
      <Page setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
        <img className="left-bottom" src={require("../resources/left-bottom-corner.png")}/>
        <img className="left-top" src={require("../resources/left-top-corner.png")}/>
        <img className="right-bottom" src={require("../resources/left-bottom-corner.png")}/>
        <img className="right-top" src={require("../resources/left-top-corner.png")}/>
        <div className="grid">
            {PROJECT_ORDER.map(projectName => <CustomLink 
            halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation} 
           setTransition={props.setTransition}
           linkTo={`/${projectName}`} 
           customClass={"workLink"}>
            <ProgressiveImage src={PROJECTS[projectName].mainImage.imgSrc} placeholderSrc={PROJECTS[projectName].mainImage.placeholder} hoverText={PROJECTS[projectName].projectName} />
            </CustomLink>)}
       </div>
      </Page>
    );
}
