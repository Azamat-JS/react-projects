import React from 'react'
import useWindowResize from './Window'

const WindowTest = () => {

    const windowSize = useWindowResize();
    const {width, height} = windowSize;
  return (
    <div>
        <h1>Use Window resize Hook</h1>
        <p>
            Width is {width}
        </p>
        <p>
            Height is {height}
        </p>
    </div>
  )
}

export default WindowTest