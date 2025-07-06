import { useEffect, useState } from "react"
import GitHubUser from "./GitHubUser";
import './github.css'

const Github = () => {
    const [username, setUsername]= useState('Azamat-JS');
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false)

    async function fetchGithubUserData() {
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${username}`)

        const data = await res.json()
        if(data){
            setUserData(data)
            setLoading(false)
            setUsername('')
        }
        console.log(data)
    }

    function handleSubmit(){
        fetchGithubUserData()
    }

    useEffect(() => {
        fetchGithubUserData()
    },[]);

    if(loading){
        return <h1 className="loading">Loading data...</h1>
    }

  return (
    <div className='github-container'>
        <div className='input-wrapper'>
            <input 
            type="text"
            name='search-by-username'
            value={username}
            placeholder='Search GitHub username'
            onChange={(event) => 
            setUsername(event.target.value)}/>
            <button onClick={handleSubmit}>Search</button>
        </div>
        {
            userData !== null ? <GitHubUser user={userData}/> : null
        }
    </div>
  )
}

export default Github