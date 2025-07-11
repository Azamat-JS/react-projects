import { useState } from "react";
import data from "./data";
import './accord.css'

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([])

  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId)
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
    console.log(findIndexOfCurrentId)
    if (findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
    else copyMultiple.splice(findIndexOfCurrentId, 1)
    setMultiple(copyMultiple)
  }

  console.log(selected, multiple);
  
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
      <div className="accordian">
        {data && data.length > 0 &&
          data.map((dataItem, index) => (
            <div className="item" key={index}>
              <div onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {
                enableMultiSelection ?
                  multiple.indexOf(dataItem.id) !== -1 &&
                  <div className="content">{dataItem.answer}</div> :
                  selected === dataItem.id && (
                  <div className="content">{dataItem.answer}</div>
              )}
              {/* {
                selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ?
                  <div className="content">{dataItem.answer}</div>
                  : null
              } */}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Accordian;
