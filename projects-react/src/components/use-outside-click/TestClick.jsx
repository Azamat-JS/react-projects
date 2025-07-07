import React, { useRef, useState } from 'react';
import useClick from './UseClick';

const TestClick = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  useClick(ref, () => setShowContent(false));

  function handleClose() {
    setShowContent(false);
  }

  return (
    <div ref={ref}>
      {showContent ? (
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit...</h1>
          <p>Please click outside of this to close this.</p>
          <button onClick={handleClose}>&times;</button>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default TestClick;
