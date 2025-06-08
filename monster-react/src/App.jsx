import { useState } from 'react'
import Conditions from './components/Conditions'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Conditions isValid={true}/>
    </>
  )
}

export default App
