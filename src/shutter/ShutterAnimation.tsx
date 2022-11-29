import React, { useRef, useEffect, useState } from 'react'
import { Canvas } from './CanvasCry';

function getWindowDimensions(): {width: number, height: number} {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

export interface ShutterAnimationProps {
    animationFinishedCallback: any;
    animationHalfFinishedCallback: any;
    reverse: boolean;
}


const framesTotal = 15;
const sl = 10;

export function ShutterAnimation(props: ShutterAnimationProps) { 
  const frames = [];
  const { width, height } = getWindowDimensions();
  const ah = width;
  const blah = height;

  for (let i = 0; i < framesTotal; i++) {
    frames.push(<Canvas 
        width={ah}
        height={blah}
        index={i}
        slices={sl}
        frameCount={framesTotal}
      />)
  }
  const [currentImage, setCurrentImage] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);
  const [animationHalfFinished, setAnimationHalfFinished] = useState(false);

  let intervalId: any;

  useEffect(() => {
    intervalId = setInterval(() => {
        setCurrentImage(current => {
            let next = 0;
            console.log(`setting current image ${animationHalfFinished} ${animationFinished}`);
            console.log(`setting current image ${current}`);
            if (animationHalfFinished) {
                next = current - 1;
            } else if (animationFinished) {
                next = next;
            } else {
                next = current + 1;
            }
            return next;
        });
    }, 50);

    
    return () => {
        clearInterval(intervalId);
      };
}, [currentImage]);
  const topPosition = -currentImage * blah;
     if (currentImage === framesTotal - 1 && !animationHalfFinished) {
    setAnimationHalfFinished(true);
    console.log("halfway done");
    props.animationHalfFinishedCallback();
  }

  if (animationHalfFinished && currentImage === 0) {
    setAnimationFinished(true);
    setAnimationHalfFinished(false);
    props.animationFinishedCallback();
  }
  return (
    <div className="animation"> 
    <div className="frames" style={{top: topPosition}}>{frames}</div>
    </div>
  );
}

