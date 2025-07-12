import { useAuth } from '@clerk/clerk-react';
import './Dashboard.css'

const Dashboard = () => {
  const {userId} = useAuth()
  const { getToken } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await getToken();
    const text = e.target.text.value;
    if(!text) return;

    await fetch("http://localhost:4000/api/chats", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify({ text})
    })
  }

  return (
    <div className='dashboard'>
      <div className="texts">
        <div className="logo">
          <img src="/logo.png" alt="" />
          <h1>ZET AI</h1>
        </div>
        <div className="options">
        <div className="option">
          <img src="chat.png" alt="" />
          <span>Create a New Chat</span>
        </div>
        <div className="option">
          <img src="image.png" alt="" />
          <span>Analyze images</span>
        </div>
        <div className="option">
          <img src="code.png" alt="" />
          <span>Help me with my code</span>
        </div>
        </div>
      </div>
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <input type="text" name='text' placeholder='Ask me anything...' />
          <button>
            <img src="/arrow.png" alt="" />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard