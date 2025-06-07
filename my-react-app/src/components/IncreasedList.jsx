import React, { useState } from 'react'

const IncreasedList = () => {

    const [foods, setFoods] = useState([]);

    const handleAddFood = () => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";

        setFoods([...foods, newFood])
    }

    const handleRemoveFood = (index) => {
        setFoods(foods.filter((_, idx) => idx !== index));
    };

  return (
    <div>
        <h2>List of Foods</h2>
        <ul>
            {foods.map((f, i) => <li key={i} onClick={() => handleRemoveFood(i)}>{f}</li>)}
        </ul>
        <input type="text" id='foodInput' placeholder='Enter food name'/>
        <button onClick={handleAddFood}>Add food</button>
    </div>
  )
}

export default IncreasedList