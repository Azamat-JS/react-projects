import React, { useEffect, useState } from 'react'

import UserGreeting from './components/UserGreeting';


const App = () => {

  return (
    <main>
      <UserGreeting isLoggedIn={true} username="Azamat Abdulloh"/>
    </main>
  )
}

export default App