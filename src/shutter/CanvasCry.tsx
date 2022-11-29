import React, { useRef, useEffect } from 'react'

export interface CanvasProps {
    width: number;
    height: number;
    slices: number;
    frameCount: number;
    index: number;
}

import shutterImage from '../resources/shutter.svg';

export function Canvas(props: CanvasProps) {
  
  const canvasRef = useRef(null);

  const rotateStep = 2*Math.PI/props.slices;
  const rotateDeg = 30;
  const sliceWidth = props.width*.6;
  const sliceHeight = sliceWidth*1.2;

  // Calculating the offset
  const startDeg = 30;
  const angleStep = ((90 - startDeg)/props.frameCount)*Math.PI/180;
  const image = new Image();
  image.src = shutterImage;

  
  useEffect(() => {
    // @ts-ignore
    const context = canvasRef.current.getContext("2d");
    image.onload = () => {
        context.translate(props.width/2,props.height/2);

        for (let i = 0; i < props.slices; i++) {
            context.rotate(-rotateStep);
      
            // Saving the current rotation settings, so we can easily revert
            // back to them after applying an additional rotation to the slice.
      
            context.save();
      
            // Moving the origin point (around which we are rotating
            // the canvas) to the bottom-center of the shutter slice.
            context.translate(0,props.height/2);
      
            // This rotation determines how widely the shutter is opened.
            context.rotate((props.frameCount-1-props.index)*angleStep);
      
            // An additional offset, applied to the last five frames,
            // so we get a smoother animation:
      
            let offset = 0;
            if((props.frameCount-1-props.index) <5){
                offset = (props.frameCount-1-props.index)*5;
            }

            let circleOffset = props.width/2 - (props.width/2/props.frameCount * (props.index));

      
      
            // Drawing the shutter image
            context.drawImage(image,-sliceWidth/2 + (circleOffset),-(props.height/2 + offset), sliceWidth, sliceHeight);
      
            // Reverting back to the saved settings above.
            context.restore();
          }
    };
  }, [])

  // @ts-ignore
  return <canvas ref={canvasRef} width={props.width} height={props.height} />;
  // return (<h1>hi</h1>);
}

