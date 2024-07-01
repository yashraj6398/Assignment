import React, { useState, useEffect, useRef } from 'react';

const GoogleSlides = () => {
  const [leftCount, setLeftCount] = useState(0);
  const [rightCount, setRightCount] = useState(0);
  const iframeRef = useRef(null);

  const postMessageToIframe = (keyCode) => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage(
        { type: 'key', keyCode },
        '*'
      );
    }
  };

  const handleLeftClick = () => {
    setLeftCount((prevCount) => {
      const newCount = prevCount + 1;
      updateCount('left', newCount);
      return newCount;
    });
    postMessageToIframe(37); 
  };

  const handleRightClick = () => {
    setRightCount((prevCount) => {
      const newCount = prevCount + 1;
      updateCount('right', newCount);
      return newCount;
    });
    postMessageToIframe(39); 
  };

  const updateCount = (direction, count) => {
    fetch('http://localhost:5000/updateCount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ direction, count }),
    }).catch((error) => console.error('Error updating count:', error));
  };

  return (
    <div>
      <iframe
        ref={iframeRef}
        src="https://docs.google.com/presentation/d/1RTsHVjn6BkR8KTZ7EEWixupKWuMwAs-b9Mbhpt99OUM/embed"
        width="960"
        height="569"
        allowFullScreen
        frameBorder="0"
      ></iframe>
      <div>
        <button onClick={handleLeftClick}>Left</button>
        <button onClick={handleRightClick}>Right</button>
      </div>
      <div>
        <p>Left Button Click Count: {leftCount}</p>
        <p>Right Button Click Count: {rightCount}</p>
      </div>
    </div>
  );
};

export default GoogleSlides;