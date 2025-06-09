import React from 'react'

const Cart = () => {
    const items = [];

    return (
        <div>
            <h1>Cart 💻</h1>
            {items.length > 0 && <h2>You have {items.length} items</h2>}
        </div>
    )
}

export default Cart