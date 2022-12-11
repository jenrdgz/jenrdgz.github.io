import { Page } from "../sharedComponents/Page";
import { ProgressiveImage } from "../sharedComponents/ProgressiveImage";

export interface PortfolioProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
}

export function Portfolio(props: PortfolioProps) {
    return (
      <Page setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
        <div className="topPartWrapper">
        <img className="left-bottom" src={require("../resources/left-top-corner-project.png")}/>
        <img className="left-top" src={require("../resources/left-top-corner-project.png")}/>
        <img className="right-bottom" src={require("../resources/left-top-corner-project.png")}/>
        <img className="right-top" src={require("../resources/left-top-corner-project.png")}/>
        <div className="viewfinder">ViewFinder</div>
        <div className="topPart sad">
           <ProgressiveImage src={require("../resources/Frame.png")} placeholderSrc={require("../resources/Frame-loading.png")} />
           <div className="detailWrapper">
            <div className="details">
            <img className="left-top" src={require("../resources/left-top-corner-project-details.png")}/>
            <img className="left-bottom" src={require("../resources/left-top-corner-project-details.png")}/>
              <h1>Portfolio</h1>
              <h4><a href="https://issuu.com/jenny_rodriguez/docs/web_viewfinder_pages" >View</a></h4>
            </div>
           </div>
           </div>
        </div>
        <div className="iframeWrapper">
        <iframe allow="clipboard-write" sandbox="allow-top-navigation allow-top-navigation-by-user-activation allow-downloads allow-scripts allow-same-origin allow-popups allow-modals allow-popups-to-escape-sandbox allow-forms" className="iframeCustom" src="https://e.issuu.com/embed.html?backgroundColor=%23ffffff&d=web_viewfinder_pages&u=jenny_rodriguez"></iframe>
        </div>
      </Page>
    );
}

