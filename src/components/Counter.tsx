import { useState } from 'react';

const Counter = () => {
  const [value, SetValue] = useState<number>(0);

  const handleAccumulate = (number: number): void => {
    SetValue(value + number);
  };

  return (
    <>
      <h3>
        Counter: <small>{value}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => handleAccumulate(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => handleAccumulate(-1)}>
        -1
      </button>
    </>
  );
};

export default Counter;
