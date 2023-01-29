import { Page } from "../sharedComponents/Page";
import { ProgressiveImage } from "../sharedComponents/ProgressiveImage";

export interface AboutProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
}

export function About(props: AboutProps) {
    return (
      <Page setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
        <div className="topPartWrapper">
        <img className="left-bottom" src={require("../resources/left-top-corner-project.png")}/>
        <img className="left-top" src={require("../resources/left-top-corner-project.png")}/>
        <img className="right-bottom" src={require("../resources/left-top-corner-project.png")}/>
        <img className="right-top" src={require("../resources/left-top-corner-project.png")}/>
        <div className="viewfinder">ViewFinder</div>
        <div className="topPart sad">
           <ProgressiveImage src={require("../resources/headshot.jpg")} placeholderSrc={require("../resources/headshot-loading.jpg")} />
           <div className="detailWrapper">
            <div className="details">
            <img className="left-top" src={require("../resources/left-top-corner-project-details.png")}/>
            <img className="left-bottom" src={require("../resources/left-top-corner-project-details.png")}/>

              {`Hello! My name is Jenny Rodriguez. I am a graphic designer and photographer from the Bay Area. My background and passion for photography have led me to the path of design. I love to create and to see each layout as a viewfinder. I start out with the big idea and then zoom in on the details. The details are what makes a good design a great design. I like to think out of the box and go with my instinct when creating ideas. I want my designs to be original and represent my talent as an artist.`}
            </div>
           </div>
           </div>
        </div>
      </Page>
    );
}

