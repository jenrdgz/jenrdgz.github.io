import { useEffect, useRef, useState } from "react";
import {
    Link
  } from "react-router-dom";
import { CustomLink } from "../sharedComponents/CustomLink";
import { Page } from "../sharedComponents/Page";
import { ProgressiveImage } from "../sharedComponents/ProgressiveImage";
import { ShutterAnimation } from "../shutter/ShutterAnimation";
import { PROJECTS, PROJECT_ORDER } from "./ProjectList";

export interface ProjectProps {
    projectName: string;
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
}

export function Project(props: ProjectProps) {
    const projectDetails = PROJECTS[props.projectName];
    const currIndex = PROJECT_ORDER.indexOf(props.projectName);
    const prevProject = currIndex >= 1 ? PROJECT_ORDER[currIndex - 1] : null;
    const nextProject = currIndex < PROJECT_ORDER.length - 1 ? PROJECT_ORDER[currIndex + 1] : null;

    return (
      <Page key={props.projectName} setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
        <div className="topPartWrapper">
        <img className="left-bottom" src={require("../resources/left-top-corner-project.png")}/>
        <img className="left-top" src={require("../resources/left-top-corner-project.png")}/>
        <img className="right-bottom" src={require("../resources/left-top-corner-project.png")}/>
        <img className="right-top" src={require("../resources/left-top-corner-project.png")}/>
        <div className="viewfinder">ViewFinder</div>
        <div className="projectName">{projectDetails.projectNameSide}</div>
        <div className="course"><span>{projectDetails.course}</span><span>{projectDetails.instructor}</span></div>
        <div className="date">{projectDetails.date}</div>
        <div className="topPart">
           <ProgressiveImage src={projectDetails.mainImage.imgSrc} placeholderSrc={projectDetails.mainImage.placeholder} />
           <div className="detailWrapper">
            <img className="left-top" src={require("../resources/left-top-corner-project-details.png")}/>
            <img className="left-bottom" src={require("../resources/left-top-corner-project-details.png")}/>
            <div className="concept"><span>{`>`}</span>{projectDetails.projectConcept}</div>
            <div className="details">
              {projectDetails.description}
            </div>
           </div>
           </div>
        </div>
        <div className="book">
           {projectDetails.bookImages.map(pageImage => <div className={`bookPage ${pageImage.hasBorder && 'bookBorder'}`}>
            <ProgressiveImage src={pageImage.imgSrc} placeholderSrc={pageImage.placeholder} />
           </div>)}
           <div className="bookPage">
             {prevProject !== null && <div className="left-bottom">
               <CustomLink halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation} 
                setTransition={props.setTransition}
                linkTo={`/${prevProject}`} >{`< ${PROJECTS[prevProject].projectName}`}</CustomLink>
             </div>}
             {nextProject !== null && <div className="right-bottom">
              <CustomLink halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation} 
               setTransition={props.setTransition}
               linkTo={`/${nextProject}`} >{`${PROJECTS[nextProject].projectName} >`}</CustomLink>
             </div>}
             </div>
           </div>
      </Page>
    );
}

