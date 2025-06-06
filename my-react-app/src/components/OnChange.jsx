import React, {useState} from 'react'

const OnChange = () => {

    const [name, setName] = useState("Default");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("")

    function handleNameChange(event){
        setName(event.target.value);
    };

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    };

    function handleCommentChange(event){
        setComment(event.target.value);
    };

    function handlePaymentChange(event){
        setPayment(event.target.value);
    };

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

  return (
    <div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input type='number' value={quantity} onChange={handleQuantityChange}/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instructions' />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="GiftCard">GiftCard</option>
        </select>

        <p>Payment: {payment}</p>

        <label>
            <input type="radio" value="pick up"
                   checked={shipping === "pick up"}
                    onchange={handleShippingChange}
                   />
            Pick Up
        </label>
    <br />
        <label>
             <input type="radio" value="delivery"
                   checked={shipping === "delivery"}
                    onchange={handleShippingChange}
                    />
            Delivery
        </label>
        <p>Shipping: {shipping}</p>
    </div>
  )
}

export default OnChange