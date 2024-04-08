// 1. Creating a Focusable Input Field
import React, { useRef, useEffect } from 'react';

function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} />;
}

// 2. Managing Uncontrolled Components
import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleInputChange = () => {
    console.log('Current value:', inputRef.current.value);
  };

  return <input ref={inputRef} onChange={handleInputChange} />;
}

// 3. Interacting with DOM Elements
import React, { useRef } from 'react';

function ChangeBackgroundColorOnClick() {
  const divRef = useRef(null);

  const changeColor = () => {
    if (divRef.current) {
      divRef.current.style.backgroundColor = 'red'; // Change color to red
    }
  };

  return <div ref={divRef} onClick={changeColor}>Click me to change background color</div>;
}

// App.js
import React from 'react';
import FocusableInput from './FocusableInput';
import UncontrolledInput from './UncontrolledInput';
import ChangeBackgroundColorOnClick from './ChangeBackgroundColorOnClick';

function App() {
  return (
    <div>
      <h1>Focusable Input Field</h1>
      <FocusableInput />
      <h1>Managing Uncontrolled Components</h1>
      <UncontrolledInput />
      <h1>Interacting with DOM Elements</h1>
      <ChangeBackgroundColorOnClick />
    </div>
  );
}

export default App;
