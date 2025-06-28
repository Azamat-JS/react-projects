import { useState } from 'react'
import Accordian from './components/accordian/Accordian'
import './App.css'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Random color component */}
      {/* <RandomColor/> */}

      {/* Star rating component */}
      {/* <StarRating/> */}

      {/* Image slider component */}
      <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} />
    </>
  )
}

export default App
