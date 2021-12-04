import { useState } from 'react';

const useCounter = (initial = 10) => {
  const [value, SetValue] = useState<number>(initial);

  const handleAccumulate = (number: number): void => {
    SetValue(value + number);
  };

  return {
    value,
    handleAccumulate,
  };
};

export default useCounter;
