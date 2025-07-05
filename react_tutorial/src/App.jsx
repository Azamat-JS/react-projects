import { useState } from 'react'
import Accordian from './components/accordian/Accordian'
import TreeView from './components/tree-view'
import { menus } from './components/tree-view/data'
import LoadMoreData from './components/load-more-data'
import QRCodeGenerator from './components/qr-code'
import LightDarkMode from './components/dark-theme'
import ScrollIndicator from './components/scroll-indicator'

function App() {

  return (
    <>
      {/* <Accordian /> */}

      {/* <RandomColor/> */}

      {/* <StarRating/> */}

      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'} /> */}

      {/* <LoadMoreData /> */}

      {/* <TreeView menus={menus} /> */}

      {/* <QRCodeGenerator /> */}

      {/* <LightDarkMode /> */}

      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/>
      
        </>
  )
}

export default App
