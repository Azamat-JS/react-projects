import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)





// import likes from './doc.js'
// import Like from './assets/like.jsx'
// function App(){
//  const likesElement = likes.map((like) => {
//    return <Like setup={like.setup} punchline={like.punchline} />
//  })
//   return (
//     <main>
//    {likesElement}
//     </main>
//   )
// }








