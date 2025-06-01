import { useState } from "react"


const Card = ({title, rating, isGood}) => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="card">
      <h2>{title}</h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
}

const App = () => {
  return (
    <div className="card-container">
    <Card title="Star wars" />
    <Card title="avatart" />
    <Card title="lion king" />
    </div>
  )
}

export default App
