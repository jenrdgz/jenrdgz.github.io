import { Page } from "../sharedComponents/Page";
import { ProgressiveImage } from "../sharedComponents/ProgressiveImage";

export interface AboutProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
}

export function About(props: AboutProps) {
    return (
        <Page setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation}>
        <div className="topPart">
           <ProgressiveImage src={require('../resources/work1.jpg')} placeholderSrc={require('../resources/work1-loading.jpg')} />
           <div>
            foo
           </div>
        </div>
      </Page>
    );
}

