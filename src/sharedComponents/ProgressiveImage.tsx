import { useState, useEffect } from "react";

export interface ImageProps {
    src: string;
    placeholderSrc?: string;
    hoverText?: string;
    hoverTextDescription?: string;
}
export function ProgressiveImage(props: ImageProps) {
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
           {(isShown && props.hoverText) && (
            <div className="hover">
                <div className="title">{props.hoverText}<br/>
                <div className="description">{props.hoverTextDescription}</div></div>
            </div>
           )}
           <img src={imgSrc} className={customClass} /> 
        </div></>
    );
}