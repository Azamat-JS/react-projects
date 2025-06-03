import React, { useEffect, useState } from 'react'
import List from './components/List';


const App = () => {
  const fruits = [{id: 1, name: "apple", calories: 95},
                  {id: 2, name: 'orange', calories: 90}, 
                  {id: 3, name: 'banana', calories: 100}, 
                  {id: 4, name: 'pineapple', calories: 77}, 
                  {id: 5, name: 'pear', calories: 66}];

  const vegetables = [{id: 1, name: "potato", calories: 110},
                     {id: 2, name: 'celery', calories: 25}, 
                     {id: 3, name: 'corn', calories: 63}, 
                     {id: 4, name: 'broccoli', calories: 70}, 
                     {id: 5, name: 'carrots', calories: 44}];
  return (
    <>
   {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
   {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
    </>
  )
}

export default App