import React from 'react';
import ImgE from   '../assets/hero.png';
import PropTypes from 'prop-types';

const Card = (props) => {
  return (
    <div className='card'>
        <img className='card-img' src={props.img} alt="Picture for web" />
        <h2 className='card-title'>{props.title}</h2>
        <p className='card-text'>{props.text}</p>
        <p>{props.rating}</p>
    </div>
  )
}

Card.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
}

Card.defaultProps = {
  img: ImgE,
  title: "Green Card",
  text: "Card has some text",
  rating: 4.5
}

export default Card