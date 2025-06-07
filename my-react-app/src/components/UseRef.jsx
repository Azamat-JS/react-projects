import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log('Component rendered');
    })

    function handleClick1(){
       inputRef1.current.focus();
       inputRef1.current.style.backgroundColor = "blue"
       inputRef2.current.style.backgroundColor = ""
       inputRef3.current.style.backgroundColor = ""
    }
    function handleClick2(){
       inputRef2.current.focus();
       inputRef1.current.style.backgroundColor = ""
       inputRef2.current.style.backgroundColor = "blue"
       inputRef3.current.style.backgroundColor = ""
    }
    function handleClick3(){
       inputRef3.current.focus();
       inputRef1.current.style.backgroundColor = ""
       inputRef2.current.style.backgroundColor = ""
       inputRef3.current.style.backgroundColor = "blue"
    }
  return (
    <>
    <button onClick={handleClick1}>
        Click me 1!
    </button><br/>
    <input ref={inputRef1}/>
    <button onClick={handleClick2}>
        Click me 2!
    </button><br/>
    <input ref={inputRef2}/>
    <button onClick={handleClick3}>
        Click me 3!
    </button><br/>
    <input ref={inputRef3}/>
    </>
  )
}

export default UseRef