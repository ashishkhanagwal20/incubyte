import { useState } from 'react';

import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div>Incubyte String Calculator</div>
      <span>Enter String Numbers : </span>
      <input
        type="text"
        name="stringNumber"
        id="stringNumber"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button>Calculate</button>
    </>
  );
}

export default App;
