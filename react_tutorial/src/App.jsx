import { useState } from 'react'
import Accordian from './components/accordian/Accordian'
import './App.css'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Accordian component */}
     {/* <Accordian /> */}

     {/* Random color component */}
     {/* <RandomColor/> */}

     {/* Star rating component */}
    <StarRating/>
    </>
  )
}

export default App
