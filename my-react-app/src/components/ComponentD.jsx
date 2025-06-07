import React, {useContext} from 'react';
import { UserContext } from './ComponentA';

const ComponentD = () => {
  const user = useContext(UserContext)
  return (
    <div className='box'>
      <h1>ComponentD</h1>
      <h3>{`Xayr ${user}`}</h3>
    </div>
  )
}

export default ComponentD