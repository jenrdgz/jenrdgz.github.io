import { Page } from "../sharedComponents/Page";
import { ProgressiveImage } from "../sharedComponents/ProgressiveImage";

export interface ResumeProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
}

export function Resume(props: ResumeProps) {
    return (
      <Page setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
        <div className="topPartWrapper">
        <img className="left-bottom" src={require("../resources/left-top-corner-project.png")}/>
        <img className="left-top" src={require("../resources/left-top-corner-project.png")}/>
        <img className="right-bottom" src={require("../resources/left-top-corner-project.png")}/>
        <img className="right-top" src={require("../resources/left-top-corner-project.png")}/>
        <div className="viewfinder">ViewFinder</div>
        <div className="topPart sad">
           <ProgressiveImage src={require("../resources/resume.jpg")} placeholderSrc={require("../resources/resume-loading.jpg")} />
           <div className="detailWrapper">
            <div className="details">
            <img className="left-top" src={require("../resources/left-top-corner-project-details.png")}/>
            <img className="left-bottom" src={require("../resources/left-top-corner-project-details.png")}/>
            <h1>RÉSUMÉ</h1>
              <h4><a href={require("../resources/resume.pdf")} download>Download</a></h4>
            </div>
           </div>
           </div>
        </div>
      </Page>
    );
}

