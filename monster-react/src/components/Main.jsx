import React from 'react'

const Main = (props) => {
  return (
<main>
    <h1>My Name: {props.name}</h1>
    <p>I am {props.age} years old</p>
    <h2>Main context</h2>
    <p>This is the main content</p>

</main>
  )
}

export default Main