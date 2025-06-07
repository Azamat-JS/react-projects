import React, { useEffect, useState } from 'react'

const Dimensions = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        console.log('event listener addded');

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log('event listener removed')
        }
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight)
    }
  return (<>
    <p>Window width: {width}px</p>
    <p>Window height: {height}px</p>
  </>
  )
}

export default Dimensions