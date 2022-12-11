import { useState, useEffect } from "react";

export interface ImageProps {
    src: string;
    placeholderSrc?: string;
    hoverText?: string;
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
           {isShown && (
            <div className="hover">
                {props.hoverText}
            </div>
           )}
           <img src={imgSrc} className={customClass} /> 
        </div></>
    );
}