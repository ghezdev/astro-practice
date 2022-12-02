import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter => counter + 1)}>+</button>
      <h1>{counter}</h1>
    </div>
  );
};

export default Counter;
