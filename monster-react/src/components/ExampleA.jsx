import React, { useState } from 'react'

const ExampleA = () => {
    const [count, setCount] = useState(() => {
        const initialCount = 10;
        return initialCount;
    })

    const increment = () => {
        setCount(prev => prev + 1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </div>
    )
}

export default ExampleA