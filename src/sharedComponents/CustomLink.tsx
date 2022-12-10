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

    const handleClick = () => {
      props.setTransition(true);
      setIsClicked(true);
    }
  
    if (isClicked && props.halfFinishedTransitionAnimation) {
      console.log("navigating to: " + props.linkTo);
      setIsClicked(false);
      navigate(props.linkTo);
    }

    return (
        <div className={`customLink ${props.customClass}`} onClick={() => handleClick()}>
           {props.children}
        </div>
    );
}