import { useEffect, useState } from "react";
import {
    Link
  } from "react-router-dom";
import { Page } from "../sharedComponents/Page";
import { ProgressiveImage } from "../sharedComponents/ProgressiveImage";
import { ShutterAnimation } from "../shutter/ShutterAnimation";
import { PROJECTS } from "./ProjectList";

export interface ProjectProps {
    projectName: string;
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
}

export function Project(props: ProjectProps) {
    const projectDetails = PROJECTS[props.projectName];
    return (
      <Page setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
        <div className="topPart">
           <ProgressiveImage src={projectDetails.mainImage.imgSrc} placeholderSrc={projectDetails.mainImage.placeholder} />
           <div>
            {projectDetails.description}
           </div>
        </div>
        <div className="book">
           {projectDetails.bookImages.map(pageImages => <div className="bookPage">
            {pageImages.map(pageImage => <ProgressiveImage src={pageImage.imgSrc} placeholderSrc={pageImage.placeholder} />)}
           </div>)}
       </div>
      </Page>
    );
}

