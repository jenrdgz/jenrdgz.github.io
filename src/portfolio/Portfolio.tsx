import { useEffect, useState } from "react";
import {
    Link, useNavigate
  } from "react-router-dom";
import { Page } from "../sharedComponents/Page";
import { ShutterAnimation } from "../shutter/ShutterAnimation";

export interface PortfolioProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
  }

export function Portfolio(props: PortfolioProps) {
    const navigate = useNavigate();
    const [navigateTo, setNavigateTo] = useState("");
    
    const handleClick = (linkTo: string) => {
      props.setTransition(true);
      setNavigateTo(linkTo);
    }
  
    if (props.halfFinishedTransitionAnimation) {
      navigate(navigateTo);
    }

    return (
      <Page>
        <div className="wrapper">
        <img className="left-bottom" src={require("../resources/left-bottom-corner.png")}/>
        <img className="left-top" src={require("../resources/left-top-corner.png")}/>
        <img className="right-bottom" src={require("../resources/left-bottom-corner.png")}/>
        <img className="right-top" src={require("../resources/left-top-corner.png")}/>
        <div className="grid">
            <div className="customLink" onClick={() => handleClick("/project1")}><ProgressiveImage src={require("../resources/work1.jpg")} placeholderSrc={require('../resources/work1-loading.jpg')} /></div>
            <div className="customLink" onClick={() => handleClick("/project2")}><ProgressiveImage src={require("../resources/work2.jpg")} placeholderSrc={require('../resources/work2-loading.jpg')} /></div>
            <div className="customLink" onClick={() => handleClick("/project3")}><ProgressiveImage src={require("../resources/work3.jpg")} placeholderSrc={require('../resources/work3-loading.jpg')} /></div>
            <div className="customLink" onClick={() => handleClick("/project4")}><ProgressiveImage src={require("../resources/work4.jpg")} placeholderSrc={require('../resources/work4-loading.jpg')} /></div>
            <div className="customLink" onClick={() => handleClick("/project5")}><ProgressiveImage src={require("../resources/work5.jpeg")} placeholderSrc={require('../resources/work5-loading.jpg')} /></div>
            <div className="customLink" onClick={() => handleClick("/project6")}><ProgressiveImage src={require("../resources/work6.jpg")} placeholderSrc={require('../resources/work6-loading.jpg')} /></div>
       </div>
       </div>
      </Page>
    );
}

interface ImageProps {
    src: string;
    placeholderSrc: string;
}
function ProgressiveImage(props: ImageProps) {
    const [imgSrc, setImgSrc] = useState(props.placeholderSrc || props.src);
    const [isShown, setIsShown] = useState(false);
    const customClass =
    props.placeholderSrc && imgSrc === props.placeholderSrc ? "loading" : "loaded";

    useEffect(() => {
        // update the i  const img = new Image();

        setTimeout(() => {
            const img = new Image();
            img.src = props.src;
            img.onload = () => {
                setImgSrc(props.src);
            };
        }, 1000);
        
      }, [imgSrc]);

    return (<>
        <div className="image" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
           {isShown && (
            <div className="hover">
            </div>
           )}
           <img src={imgSrc} className={customClass} /> 
        </div></>
    );
}