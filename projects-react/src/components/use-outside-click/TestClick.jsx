
import React, { useState } from 'react'

const TestClick = () => {
    const [showContent, setShowContent] = useState(false)

    function handleClose(){
        setShowContent(false)
    }
  return (
    <div className='close-container'>
        {
            showContent ? <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quidem ratione non voluptatibus tempora, commodi quae blanditiis minus, atque tempore, nostrum quaerat? Iusto repudiandae suscipit vel magnam quasi libero cumque illum labore cum, mollitia obcaecati, odio asperiores amet, esse perferendis!</h1>
                <p>Please click outside of this to close this. It won't close if you click inside of this content</p>
                <button onClick={handleClose}>&times;</button>
            </div> : <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>
  )
}

export default TestClick