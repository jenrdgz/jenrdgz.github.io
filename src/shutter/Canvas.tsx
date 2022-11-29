import React, { useRef, useEffect } from 'react'

export const Canvas = (props: any) => {
  
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canv = canvasRef.current
    // @ts-ignore
    const context = canv.getContext('2d')
    //Our first draw
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canv.width, context.canv.height)
  }, [])
  
  return <canvas ref={canvasRef} {...props}/>
}

