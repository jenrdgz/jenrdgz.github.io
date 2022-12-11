import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface CustomLinkProps {
    setTransition: any;
    halfFinishedTransitionAnimation: boolean;
    linkTo: string;
    children: any;
    customClass?: string;
}

export function CustomLink(props: CustomLinkProps) {
    const navigate = useNavigate();
    const [isClicked, setIsClicked] = useState(false);
    let audio = new Audio(require("../resources/shuttersound.wav"));

    const handleClick = () => {
      props.setTransition(true);
      setIsClicked(true);
      audio.play();
    }
  
    if (isClicked && props.halfFinishedTransitionAnimation) {
      setIsClicked(false);
      navigate(props.linkTo);
      window.scrollTo(0, 0)
    }

    return (
        <div className={`customLink ${props.customClass}`} onClick={() => handleClick()}>
           {props.children}
        </div>
    );
}