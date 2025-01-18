import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
function App(){
  const ninjaTurtles = [<h2>Leonardo</h2>, "Donatello", "Raphael", "Michelangelo"] 
  return (
    <main>
    <h1>Ninja Turtles</h1>
    <ul>
      {ninjaTurtles.map((turtle, index) => {
      return <li key={index}>{turtle}</li>
      })}
      </ul>
    </main>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
