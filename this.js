// 1. Dynamic Form Input Focus
import React, { useRef } from 'react';

function DynamicFormInputFocus() {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);

  const handleTabNavigation = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (document.activeElement === input1Ref.current) {
        input2Ref.current.focus();
      } else if (document.activeElement === input2Ref.current) {
        input3Ref.current.focus();
      }
    }
  };

  return (
    <form>
      <input ref={input1Ref} onKeyDown={handleTabNavigation} />
      <input ref={input2Ref} onKeyDown={handleTabNavigation} />
      <input ref={input3Ref} onKeyDown={handleTabNavigation} />
    </form>
  );
}

// 2. Real-time Input Validation
import React, { useRef, useState } from 'react';

function RealTimeInputValidation() {
  const inputRef = useRef(null);
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = () => {
    const value = inputRef.current.value;
    setIsValid(value.length >= 6); // Example validation rule: require at least 6 characters
  };

  return (
    <div>
      <input ref={inputRef} onChange={handleInputChange} style={{ border: isValid ? '1px solid green' : '1px solid red' }} />
      {!isValid && <span style={{ color: 'red' }}>Input must be at least 6 characters long.</span>}
    </div>
  );
}

// 3. Custom Form Submission Handling
import React, { useRef } from 'react';

function CustomFormSubmissionHandling() {
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    // Custom processing or validation before submitting the form to the server
    console.log('Form data:', formData);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Submit</button>
    </form>
  );
}
// App.js
import React from 'react';
import DynamicFormInputFocus from './DynamicFormInputFocus';
import RealTimeInputValidation from './RealTimeInputValidation';
import CustomFormSubmissionHandling from './CustomFormSubmissionHandling';

function App() {
  return (
    <div>
      <h1>Dynamic Form Input Focus</h1>
      <DynamicFormInputFocus />
      <h1>Real-time Input Validation</h1>
      <RealTimeInputValidation />
      <h1>Custom Form Submission Handling</h1>
      <CustomFormSubmissionHandling />
    </div>
  );
}

export default App;
