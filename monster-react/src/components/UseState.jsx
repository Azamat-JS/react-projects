import React, { useState } from 'react'

const UseState = () => {
    const [friends, setFriends] = useState(['Aziz', 'Umid']);

    const addFriends = () => setFriends([...friends, 'Jasur']);
    const removeFriend = () => setFriends(friends.filter((f) => f !== 'Umid'))
    const udpateFriend = () => setFriends(friends.map((f) => (f === 'Aziz' ? 'Azizbek' : f)))
    return (
        <section>
            {friends.map((f, i) => (
                <li key={i}>{f}</li>
            ))}

            <button onClick={addFriends}>Add a new friend</button>
            <button onClick={removeFriend}>Removefriend</button>
            <button onClick={udpateFriend}>Updatefriend</button>

        </section>
    )
}

export default UseState
