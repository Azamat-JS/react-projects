import React, { useState } from 'react'
import Search from "./components/Search"
import hero_img from './assets/hero_img.jpg'


const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <main>
      <div className='pattern'/>
      <div className='wrapper'>
        <header>
          <img src={hero_img} alt="hero-img" />
        <h1>Find <span className='text-gradient'>Clothes</span> You'll like without Hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <h2 className='text-white'>{searchTerm}</h2>
      </div>
    </main>
  )
}

export default App