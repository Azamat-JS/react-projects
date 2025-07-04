import { useState } from 'react'
import Accordian from './components/accordian/Accordian'
import './App.css'
import TreeView from './components/tree-view'
import { menus } from './components/tree-view/data'
import LoadMoreData from './components/load-more-data'
import QRCodeGenerator from './components/qr-code'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Accordian /> */}

      {/* <RandomColor/> */}

      {/* <StarRating/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menus={menus} /> */}

      <QRCodeGenerator />
        </>
  )
}

export default App
