import React, {useContext} from 'react';
import { UserContext } from './ComponentA';
import ComponentD from './ComponentD';

const ComponentC = () => {
  const user = useContext(UserContext)
  return (
    <div className='box'>
      <h1>ComponentC</h1>
      <h3>{`This is third ${user} copy in C`}</h3>
      <ComponentD />
    </div>
  )
}

export default ComponentC