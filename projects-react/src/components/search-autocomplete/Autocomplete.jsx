import React, { useEffect, useState } from 'react'

const Autocomplete = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    async function fetchListOfUsers(){
        try {
            setLoading(true)
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            console.log(data)
            if(data && data.users && data.users.length){
                setUsers(data.users.map(userItem => userItem.firstName))
                setLoading(false);
                setError(null)
            }
        } catch (error) {
            setLoading(false)
            console.error(error)
            setError(error)
        }
    }

    useEffect(() => {
        fetchListOfUsers()
    }, []);

    console.log(users)

    if(loading){
        return <h1>Waiting for fetching users...</h1>
    }
  return (
    <div className='search-autocomplete-container'>
        <input 
        type="text"
        name='search-users' 
        placeholder='Search Users here...'/>
    </div>
  )
}

export default Autocomplete