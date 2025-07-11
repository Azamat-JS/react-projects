import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './rating.css'


const StarRating = ({ nuOfStars = 10 }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }

    function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <div className='star-rating'>
            {
                [...Array(nuOfStars)].map((_, index) => {
                    index += 1
                    return <FaStar
                        key={index}
                        className={index <= (hover || rating) ? 'active' : 'inactive'}
                        onClick={() => handleClick(index)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave()}
                        size={40}
                    />
                })
            }
        </div>
    )
}

export default StarRating