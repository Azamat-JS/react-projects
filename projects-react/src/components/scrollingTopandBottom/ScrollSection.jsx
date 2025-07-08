import React, { useRef } from "react";

const ScrollSection = () => {

  const ref = useRef()
  console.log(ref)

  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "1000px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Forth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "black",
      },
    },
  ];

  function handleScrollSection(){
    let pos = ref.current.getBoundingClientRect().top

    window.scrollTo({
      top: pos,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div key={index} ref={index === 2 ? ref : null} style={dataItem.style}>
          <h3 key={index}>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default ScrollSection;
