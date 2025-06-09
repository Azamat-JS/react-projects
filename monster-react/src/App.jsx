import { useState } from 'react';
import StyleCard from './components/StyleCard';
import ProfileCard from './components/ProfileCard';


function App() {
  const [count, setCount] = useState(0)

  return (
    <section>
      <StyleCard />
      <ProfileCard />
    </section>
  )
}

export default App
