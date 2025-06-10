import React from 'react'

const Cart = () => {
    const items = ["phone", 'laptop', 'watch', 'computer'];

    return (
        <div>
            <h1>Cart 💻</h1>
            {items.length > 0 && <h2>You have {items.length} items</h2>}
            <ul>
                <h4>Products</h4>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart