import React, { useEffect, useState } from 'react'
import Card from './components/Card';
import Button from './components/Button';
import img1 from './assets/hero.png'
import img2 from './assets/hero_img.jpg'


const App = () => {

  return (
    <main>
      <Card img={img1} title='Azamat Developer' text="Node.js web developer for more than 6 months"/>
      <Card img={img2} title='Davron Designer' text="Figma designer for more than 6 months"/>
      <Card img={img1} title='Odil SMM' text="SMM manager in X company for more than 10 months"/>
      <Button/>
    </main>
  )
}

export default App