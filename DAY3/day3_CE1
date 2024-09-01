import React, { useState } from 'react';

function Condition() {
  const [isVisible, setIsVisible] = useState(false); 

  const toggleVisibility = () => {
    setIsVisible(!isVisible); 
  };

  return (
    <div>
      {}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Component' : 'Show Component'}
      </button>

      {}
      {isVisible && <p>Hi! How are You!!!</p>}
    </div>
  );
}

export default Condition;
