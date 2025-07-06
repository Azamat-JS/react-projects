import React from 'react'

const Suggestions = ({data, handleClick}) => {
  return (
    <ol>
        {
            data && data.length ? 
            data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>)
            : null
        }
    </ol>
  )
}

export default Suggestions