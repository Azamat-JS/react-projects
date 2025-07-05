import { useState } from 'react'
import Accordian from './components/accordian/Accordian'
import TreeView from './components/tree-view/tree'
import { menus } from './components/tree-view/data-tree.js'
import LoadMoreData from './components/load-more-data/load-data'
import QRCodeGenerator from './components/qr-code/code'
import LightDarkMode from './components/dark-theme/theme'
import ScrollIndicator from './components/scroll-indicator/scroll'
import TabTest from './components/custom-tabs/tab-test'
import ModalTest from './components/custom-modal/modal-test'
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

      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* <TabTest /> */}

      <ModalTest />
      
        </>
  )
}

export default App
