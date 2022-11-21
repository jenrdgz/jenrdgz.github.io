import {
    Link
  } from "react-router-dom";
import { Page } from "../sharedComponents/Page";

export function Portfolio() {
    return (
      <Page>
        <div className="wrapper">
        <div className="grid-container">
        <img className="left-bottom" src={require("../resources/left-bottom-corner.png")}/>
        <img className="left-top" src={require("../resources/left-top-corner.png")}/>
        <img className="right-bottom" src={require("../resources/left-bottom-corner.png")}/>
        <img className="right-top" src={require("../resources/left-top-corner.png")}/>
        <div className="grid">
            <Image src={require("../resources/work1.jpg")} />
            <Image src={require("../resources/work2.jpg")} />
            <Image src={require("../resources/work3.jpg")} />
            <Image src={require("../resources/work4.jpg")} />
            <Image src={require("../resources/work5.jpeg")} />
            <Image src={require("../resources/work6.jpg")} />
       </div>
       </div>
       </div>
      </Page>
    );
}

interface ImageProps {
    src: string;
}
function Image(props: ImageProps) {
    return (
        <div className="image">
           <img src={props.src} /> 
        </div>
    );
}