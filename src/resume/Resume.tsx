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
        <div className="topPart">
           <ProgressiveImage src={require("../resources/work1.jpg")} placeholderSrc={require("../resources/work1-loading.jpg")} />
           <div className="detailWrapper">
            <div className="details">
            <img className="left-top" src={require("../resources/left-top-corner-project-details.png")}/>
            <img className="left-bottom" src={require("../resources/left-top-corner-project-details.png")}/>

              {`foo`}
            </div>
           </div>
           </div>
        </div>
      </Page>
    );
}

