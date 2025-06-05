import React, {useState} from 'react'


const MyComponent = () => {
    const [name, setName] = useState("Lochin");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Azizbek')       
    }

    const incrementAge = () => {
        setAge(age + 1)
    }

    const toggleEmployedStatus = () => {
        setIsEmployed((prev) => !prev)
    }
  return (
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes": "NO"}</p>
        <button onClick={toggleEmployedStatus}>Status</button>
    </div>
  )
}

export default MyComponent