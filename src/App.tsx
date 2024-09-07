import { useState } from 'react';

import './App.css';
import add from './services/add';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState<number | string>(0);

  function handleClick(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setResult(add(inputValue));
    setInputValue('');
  }
  return (
    <>
      <form onSubmit={handleClick}>
        <h2>Incubyte String Calculator</h2>
        <span>Enter String Numbers : </span>
        <input
          type="text"
          name="stringNumber"
          id="stringNumber"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Calculate</button>
        <p>Result : {result}</p>
      </form>
    </>
  );
}

export default App;
