import React, { useEffect, useState } from 'react'
import List from './components/List';


const App = () => {
  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: 'orange', calories: 90}, 
                  {id: 3, name: 'banana', calories: 100}, 
                  {id: 4, name: 'pineapple', calories: 77}, 
                  {id: 5, name: 'pear', calories: 66}];
  return (
   <List items={fruits} category="Fruits"/>
  )
}

export default App