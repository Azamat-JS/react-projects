import React from 'react';
import ImgE from   '../assets/hero.png'

const Card = ({img, title, text}) => {
  return (
    <div className='card'>
        <img className='card-img' src={img} alt="Picture for web" />
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>{text}</p>
    </div>
  )
}

export default Card