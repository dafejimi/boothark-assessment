import React, { useState, useRef, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Component1, Component2 } from './components';

function App() {
  const [containerVisible, setContainerVisible] = useState<boolean>(false);
  const [showComponent2, setShowComponent2] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleContainerVisibility = () => {
    setContainerVisible(!containerVisible);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
      setContainerVisible(false);
      setShowComponent2(false)
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  return (
    <div>
      <div className="App">
        <button onClick={toggleContainerVisibility}>Share</button>
      </div>
      <div className={`overlay ${containerVisible ? 'visible' : ''}`} onClick={toggleContainerVisibility}></div>
      <div ref={containerRef} className={`container ${containerVisible ? 'visible' : ''}`}>
        {showComponent2 ? <Component2 /> : <Component1 showComponent2={showComponent2} setShowComponent2={setShowComponent2} />}
      </div>
    </div>
    
  );
}

export default App;
