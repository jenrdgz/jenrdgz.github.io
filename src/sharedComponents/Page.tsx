import { Footer } from "../footer/Footer";
import { Nav } from "../nav/Nav";

export interface PageProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
    children: any;
}

export function Page(props: PageProps) {
    return (
        <div className="container">
            <div className="pageContent">
            <Nav setTransition={props.setTransition} halfFinishedTransitionAnimation={props.halfFinishedTransitionAnimation} />
            <div className="wrapper">
               {props.children}
            </div>
            </div>
            <Footer />
        </div>
    );
}