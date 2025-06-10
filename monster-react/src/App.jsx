import { useState } from 'react';
import UserStatus from './components/UserStatus';
import Greeting from './components/Greeting';


function App() {

  return (
    <section>
      <Greeting timeOfDay="morning" />
    </section>
  )
}

export default App
