import {
    Link
  } from "react-router-dom";

export function SplashPage() {
    return (
      <Link to="/about" className="splashPage">
        <div className="title">
            VIEWFINDER
            <img className="left-bottom" src={require("../resources/left-bottom-corner.png")}/>
            <img className="left-top" src={require("../resources/left-top-corner.png")}/>
        </div>
        <div className="description">
                {`Jenny Rodriguez is both—
            a graphic designer & photographer.`}
        </div>
      </Link>
    );
}