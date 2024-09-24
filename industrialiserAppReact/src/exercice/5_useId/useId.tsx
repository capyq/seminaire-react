import React, { useId } from 'react';

const UseIdExample: React.FC = () => {
  const [inputId] = useId();
  const [buttonId] = useId();

  return (
    <div>
      <label htmlFor={inputId}>Input:</label>
      <input id={inputId} type="text" />

      <button id={buttonId}>Button</button>
    </div>
  );
};

export default UseIdExample;